import babel from 'rollup-plugin-babel';
import federation from '@module-federation/rollup-federation';
import {dependencies as deps} from './package.json';
import typescript from 'rollup-plugin-typescript2';
import {DEFAULT_EXTENSIONS} from "@babel/core";
import { terser } from "rollup-plugin-minification";

export default {
  input: 'src/index.ts',
  plugins: [
    typescript({
    }),
    terser(),
    babel({
      extensions: [
        ...DEFAULT_EXTENSIONS,
        '.ts',
        '.tsx'
      ],
      "presets": ["@babel/preset-env"],
      runtimeHelpers: true,
      exclude: "node_modules/**",
      externalHelpers: true
    }),
    federation({
      name: "app_container",
      filename: "remoteEntry.js",
      // remotes: {
      //   // 'qj-monitor-vue': 'qj_monitor_vue@http://localhost:3005/remoteEntry.js',
      // },
      shared: {
        "qj-shared-library": {
          singleton: true,
          import: "@brushes/qj-shared-library",
          // requiredVersion: require("../s-shared-library-1.0/package.json").version,
          requiredVersion: deps["@brushes/qj-shared-library"],
        },
        "antd": {
          singleton: true,
          requiredVersion: deps.antd,
        },
        "react": {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        }
      },
    }),
  ],
  output: [{ format: 'esm', file: 'dist/index.js' }],
};

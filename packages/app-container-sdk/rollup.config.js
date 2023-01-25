import babel from 'rollup-plugin-babel';
// import injectProcessEnv from 'rollup-plugin-inject-process-env';
import federation from '@module-federation/rollup-federation';
import { terser } from "rollup-plugin-minification";

// import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';
import {DEFAULT_EXTENSIONS} from "@babel/core";
import {dependencies as deps} from "./package.json";

export default {
  input: 'src/index.ts',
  // 指出应将哪些模块视为外部模块
  plugins: [
    terser(),
    // injectProcessEnv({
    //   NODE_ENV: 'production',
    // }),
    typescript({
      // objectHashIgnoreUnknownHack: true
    }),
    babel({
      extensions: [
        ...DEFAULT_EXTENSIONS,
        '.ts',
        '.tsx'
      ],
      "presets": ["@babel/preset-env"],
      "plugins": [
        "@vue/babel-plugin-jsx"
      ],
      runtimeHelpers: true,
      exclude: "node_modules/**",
      externalHelpers: true
    }),
    federation({
      "qj-shared-library": {
        singleton: true,
        import: "@brushes/qj-shared-library",
        requiredVersion: deps["@brushes/qj-shared-library"],
      },
      "antd": {
        singleton: true,
        requiredVersion: deps.antd,
      },
      "vue": {
        singleton: true,
        requiredVersion: deps.vue,
      },
      "react": {
        singleton: true,
        requiredVersion: deps.react,
      },
      "react-dom": {
        singleton: true,
        requiredVersion: deps["react-dom"],
      }
    }),
  ],
  output: [{ format: 'esm', file: 'dist/index.js' }],
};

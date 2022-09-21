import babel from 'rollup-plugin-babel';
import injectProcessEnv from 'rollup-plugin-inject-process-env';
// import federation from '@module-federation/rollup-federation';
import vue from "rollup-plugin-vue"
// import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';
import {DEFAULT_EXTENSIONS} from "@babel/core";

export default {
  input: 'src/index.ts',
  // preserveEntrySignatures: false,
  // 指出应将哪些模块视为外部模块
  // external: ['vue'],
  plugins: [
    // injectProcessEnv({
    //   NODE_ENV: 'production',
    // }),
    typescript({
      // objectHashIgnoreUnknownHack: true
    }),
    vue({
      css: true,
      compileTemplate: true
    }),
    babel({
      extensions: [
        ...DEFAULT_EXTENSIONS,
        '.ts',
        '.tsx'
      ],
      "plugins": [
        "@vue/babel-plugin-jsx"
      ],
      runtimeHelpers: true,
      exclude: "node_modules/**",
      externalHelpers: true
    }),
    // federation({
    //   remotes: {
    //     foo_app1: 'rwebpackremote',
    //     foo_rollup_spa: 'rollup_spa',
    //   },
    //   shared: {
    //     react: {
    //       singleton: true,
    //       requiredVersion: pkg.dependencies.react,
    //     },
    //     'react-dom': {
    //       singleton: true,
    //       requiredVersion: pkg.dependencies['react-dom'],
    //     },
    //   },
    // }),
  ],
  output: [{ format: 'esm', file: 'dist/index.js' }],
};

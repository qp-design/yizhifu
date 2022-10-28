const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpack = require('webpack');
const deps = require("./package.json").dependencies;
require('dotenv').config()
module.exports = {
  experiments: {
    topLevelAwait: true, // 此处为新增配置
  },
  output: {
    publicPath: "http://localhost:8888/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    // globals: {
    //   ENABLE_INNER_HTML: true,
    //   ENABLE_ADJACENT_HTML: true,
    //   ENABLE_SIZE_APIS: true,
    //   ENABLE_TEMPLATE_CONTENT: true,
    //   ENABLE_MUTATION_OBSERVER: true,
    //   ENABLE_CLONE_NODE: true,
    //   ENABLE_CONTAINS: true,
    //   'ts-jest': {
    //     diagnostics: false,
    //     tsConfig: 'tsconfig.test.json'
    //   }
    // },
  },

  devServer: {
    port: 8888,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "app_container",
      filename: "remoteEntry.js",
      remotes: {
        'qj-monitor-react': 'qj_monitor_react@http://localhost:3006/remoteEntry.js',
        'qj-monitor-vue': 'qj_monitor_vue@http://localhost:3005/remoteEntry.js',
      },
      exposes: {},
      shared: {
        "qj-shared-library": {
          singleton: true,
          import: "@brushes/qj-shared-library",
          requiredVersion: require("../s-shared-library-1.0/package.json").version,
          // requiredVersion: deps["@brushes/qj-shared-library"],
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
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new webpack.DefinePlugin({
      ENABLE_INNER_HTML: JSON.stringify(true),
      ENABLE_ADJACENT_HTML: JSON.stringify(true),
      ENABLE_SIZE_APIS: JSON.stringify(true),
      ENABLE_TEMPLATE_CONTENT: JSON.stringify(true),
      ENABLE_MUTATION_OBSERVER: JSON.stringify(true),
      ENABLE_CLONE_NODE: JSON.stringify(true),
      ENABLE_CONTAINS: JSON.stringify(true),
      "process.env": {
        REACT_APP_BASE_URL: JSON.stringify(process.env.REACT_APP_BASE_URL),
        REACT_APP_SESSION_KEY: JSON.stringify(process.env.REACT_APP_SESSION_KEY),
        REACT_APP_APPLICATION: JSON.stringify(process.env.REACT_APP_APPLICATION),
      },
    }),
  ],
};

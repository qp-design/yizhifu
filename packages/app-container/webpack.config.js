const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpack = require('webpack');
const deps = require("./package.json").dependencies;
require('dotenv').config()

module.exports = {
  output: {
    // publicPath: "http://localhost:8888/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
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
        // 'qj-monitor-react': 'qj_monitor_react@http://localhost:3006/remoteEntry.js',
        'qj-monitor-react': process.env.NODE_ENV === 'development' ?
          'qj_monitor_react@http://localhost:3006/remoteEntry.js' :'qj_monitor_react@http://monitor.lc.qjclouds.com/remoteEntry.js',
        // 'qj-monitor-vue': 'qj_monitor_vue@http://localhost:3005/remoteEntry.js',
      },
      exposes: {
        './low-code': './src/views/index.tsx'
      },
      shared: {
        "qj-shared-library": {
          singleton: true,
          import: "@brushes/qj-shared-library",
          requiredVersion: require("../s-shared-library-1.0/package.json").version,
          // requiredVersion: deps["@brushes/qj-shared-library"],
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
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new webpack.DefinePlugin({
      'process.env': `window._env_` //构建时定义process.env值为window._env_的值
    }),
  ],
};

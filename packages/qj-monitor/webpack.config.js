const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpack = require('webpack');

require('dotenv').config()

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:3003/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json", '.vue'],
  },

  devServer: {
    port: 3003,
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
      name: "qj_monitor",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        './monitor': './src/view'
      },
      shared: {
        ...deps,
        'qj-shared-library': {
          import: 'qj-shared-library',
          requiredVersion: require('../s-shared-library-1.0/package.json').version,
        },
        's-material-vue': {
          import: 's-material-vue',
          requiredVersion: require('../s-material-vue/package.json').version,
        },
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": {
        REACT_APP_BASE_URL: JSON.stringify(process.env.REACT_APP_BASE_URL),
        REACT_APP_SESSION_KEY: JSON.stringify(process.env.REACT_APP_SESSION_KEY),
        REACT_APP_APPLICATION: JSON.stringify(process.env.REACT_APP_APPLICATION),
      },
    }),
  ],
};

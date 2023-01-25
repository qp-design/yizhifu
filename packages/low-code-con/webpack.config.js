const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;
const webpack = require('webpack');
// require('dotenv').config()
// const Dotenv = require('dotenv-webpack')

module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8000,
    historyApiFallback: true,
  },

  output: {
    publicPath: process.env.NODE_ENV === 'production' ? './' : 'auto'
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
    // new Dotenv(),
    new ModuleFederationPlugin({
      shared: {
        ...deps,
        "qj-shared-library": {
          singleton: true,
          import: "@brushes/qj-shared-library",
          requiredVersion: deps["@brushes/qj-shared-library"],
        },
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        }
      },
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        REACT_APP_BASE_URL: 'http://b2coptfa10b0d4f03f4ff48c571f14558fa068.saas.qjclouds.com/'
      }),
      //构建时定义process.env值为window._env_的值
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};

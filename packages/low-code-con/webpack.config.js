const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;
const Dotenv = require('dotenv-webpack')

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
    new Dotenv(),
    new ModuleFederationPlugin({
      name: "low_code_container",
      filename: "remoteEntry.js",
      remotes: {
        'app-container': process.env.NODE_ENV === 'development' ? 'app_container@http://localhost:8888/remoteEntry.js'
          : 'app_container@https://container.lc.qjclouds.com/remoteEntry.js'
      },
      exposes: {},
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
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};

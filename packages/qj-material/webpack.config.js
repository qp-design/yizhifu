const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const {dependencies: deps} = require("./package.json");
const webpack = require('webpack');
const path = require("path");

require('dotenv').config()

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 3001,
  },
  output: {
    publicPath: 'auto',
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
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
      name: 'qj_material',
      filename: 'remoteEntry.js',
      exposes: {
        './materials': './src/react-components',
        './menu': './src/App',
      },
      shared: {
        ...deps,
        "s-material-vue": {
          import: "s-material-vue",
          requiredVersion: require("../s-material-vue/package.json").version,
        },
        // "s-material-react": {
        //   import: "s-material-react",
        //   requiredVersion: require("../s-material-react/package.json").version,
        // },
        "qj-shared-library": {
          import: "qj-shared-library",
          requiredVersion: require("../s-shared-library-1.0/package.json").version,
        },
        "react": {
          eager: true,
          // singleton: true,
          // requiredVersion: deps.react,
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
      "process.env": {
        REACT_APP_BASE_URL: JSON.stringify(process.env.REACT_APP_BASE_URL),
        REACT_APP_SESSION_KEY: JSON.stringify(process.env.REACT_APP_SESSION_KEY),
        REACT_APP_APPLICATION: JSON.stringify(process.env.REACT_APP_APPLICATION),
      },
    }),
  ],
};

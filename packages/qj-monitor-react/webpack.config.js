const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    // publicPath: "http://localhost:3006/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    alias: {
      "@tarojs/components": path.resolve('./src/components/index.ts'),
      // "@tarojs/components": path.resolve(
      //   __dirname,
      //   "../../",
      //   "node_modules",
      //   "@brushes/monitor"
      // ),
    },
  },

  devServer: {
    port: 3006,
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
        use: ["style-loader", "css-loader", "postcss-loader"],
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
      name: "qj_monitor_react",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        './monitor': "./src/view/index.tsx"
      },
      shared: {
        ...deps,
        "qj-shared-library": {
          import: "@brushes/qj-shared-library",
          singleton: true,
          requiredVersion: require("../s-shared-library-1.0/package.json").version,
          // requiredVersion: deps["@brushes/qj-shared-library"],
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
  ],
};

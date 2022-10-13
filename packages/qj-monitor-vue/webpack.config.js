const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { VueLoaderPlugin } = require("vue-loader");
const {dependencies: deps} = require("./package.json");

module.exports = {
  output: {
    publicPath: "http://localhost:3004/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".vue", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3004,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.tsx?$/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              appendTsSuffixTo: ["\\.vue$"],
              happyPackMode: true,
            },
          },
        ],
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: "qj_monitor_vue",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        './monitor-vue': './src/App.vue'
      },
      shared: {
        ...deps,
        'qj-shared-library': {
          import: 'qj-shared-library',
          requiredVersion: require('../s-shared-library-1.0/package.json').version,
        },
        vue: {
          singleton: true,
          requiredVersion: deps.vue,
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    })
  ],
};

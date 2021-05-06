const path = require("path");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, "../public/index.html"),
});
module.exports = {
  mode: "development",
  output: {
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(mjs|js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    htmlWebpackPlugin,
    new LodashModuleReplacementPlugin({
      collections: true,
      paths: true,
    }),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 8081,
  },
};

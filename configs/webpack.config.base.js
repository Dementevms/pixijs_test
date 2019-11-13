const path = require("path");
const WebpackBar = require("webpackbar");
const resolve = file => path.resolve(__dirname, "../", file);

const configureBabelLoader = () => ({
  test: /\.(jsx?)$/,
  loader: "babel-loader",
  exclude: /node_modules/
});

module.exports = {
  entry: resolve("src/index"),
  output: {
    path: resolve("dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [configureBabelLoader()]
  },
  plugins: [
    new WebpackBar({
      name: "PIXI.JS",
      profile: false
    })
  ]
};
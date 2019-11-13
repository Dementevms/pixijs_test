const path = require("path");
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.config.base");

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: '#cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, "../src"),
    watchContentBase: true,
    port: 9000,
    hot: true
  }
});

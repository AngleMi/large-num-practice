const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  entry: {
    "large-number": "./src/index.js",
    "larger-number.min": "./src/index.js"
  },
  output: {
    filename: "[name].js",
    library: "largeNumber", //库的名字
    libraryTarget: "umd", //支持的引入方式，支持amd cjs ems6,
    libraryExport: "default"
  },
  mode: 'none',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
      })
    ]
  }
}
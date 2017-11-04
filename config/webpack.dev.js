const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')

const commonConfig = common()
module.exports = merge(commonConfig, {
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
});

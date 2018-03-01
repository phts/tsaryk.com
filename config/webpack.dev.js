const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = (env = {}) => merge(common(env), {
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    stats: {
      warningsFilter: /\/mobx-react\//,
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})

const merge = require('webpack-merge')
const common = require('./webpack.common')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
  devtool: 'source-map',
  output: {
    filename: 'bundle.min.js',
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  ],
})

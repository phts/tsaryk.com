const merge = require('webpack-merge')
const common = require('./webpack.common')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const commonConfig = common({isProd: true})
module.exports = merge(commonConfig, {
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

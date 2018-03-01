const merge = require('webpack-merge')
const common = require('./webpack.common')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = (env = {}) => {
  const output = {
    filename: 'bundle.min.js',
  }

  if (env.bb) {
    output.publicPath = ''
  }

  return merge(common({...env, prod: true}), {
    devtool: 'source-map',
    output,
    plugins: [
      new UglifyJSPlugin({
        sourceMap: true,
      }),
    ],
  })
}

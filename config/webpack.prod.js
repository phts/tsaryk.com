const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = (env = {}) => {
  const output = {
    filename: 'bundle.[hash:4].js',
  }

  if (env.bb) {
    output.publicPath = ''
  }

  return merge(common({...env, prod: true}), {
    mode: 'production',
    devtool: 'source-map',
    output,
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          sourceMap: true,
          uglifyOptions: {
            compress: {
              reduce_vars: false,
            },
          },
        }),
      ],
    },
  })
}

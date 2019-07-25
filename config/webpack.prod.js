'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common')

module.exports = (env = {}) => {
  const output = {
    filename: '[name].[contenthash:4].js',
  }

  if (env.relative) {
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
              // eslint-disable-next-line camelcase
              reduce_vars: false,
            },
          },
        }),
      ],
    },
    plugins: [new webpack.HashedModuleIdsPlugin()],
  })
}

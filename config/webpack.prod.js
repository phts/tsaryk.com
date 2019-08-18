'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
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
    plugins: [new webpack.HashedModuleIdsPlugin()],
  })
}

const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = (env = {}) => {
  const output = {
    filename: 'bundle.[hash:4].js',
  }

  if (env.bb) {
    output.publicPath = ''
  }

  return merge(common({...env, prod: true}), {
    devtool: 'source-map',
    output,
  })
}

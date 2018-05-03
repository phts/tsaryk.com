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
    mode: 'production',
    devtool: 'source-map',
    output,
  })
}

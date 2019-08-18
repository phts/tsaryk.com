import webpack, {Configuration} from 'webpack'
import merge from 'webpack-merge'
import common, {Options} from './webpack.common'

export default (env: Options = {}) => {
  const output: Configuration['output'] = {
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

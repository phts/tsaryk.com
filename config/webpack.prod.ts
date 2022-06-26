import webpack, {Configuration} from 'webpack'
import merge from 'webpack-merge'
import common from './webpack.common'

const output: Configuration['output'] = {
  filename: '[name].[contenthash:4].js',
}

if (process.env.BUILD_RELATIVE === 'true') {
  output.publicPath = ''
}

export default merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output,
  plugins: [new webpack.ids.HashedModuleIdsPlugin()],
})

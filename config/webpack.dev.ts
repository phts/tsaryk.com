import webpack from 'webpack'
import merge from 'webpack-merge'
import common from './webpack.common'

export default merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
})

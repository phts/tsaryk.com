import webpack from 'webpack'
import merge from 'webpack-merge'
import common, {Options} from './webpack.common'

export default (env: Options = {}) =>
  merge(common(env), {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
      hot: true,
      stats: {
        warningsFilter: /\/mobx-react\//,
      },
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
  })

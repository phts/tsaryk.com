import * as WebpackDevServer from 'webpack-dev-server'
import merge from 'webpack-merge'
import common from './webpack.common'

declare module 'webpack' {
  interface Configuration {
    devServer?: WebpackDevServer.Configuration
  }
}

export default merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    liveReload: false,
  },
})

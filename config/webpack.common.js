const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const project = path.resolve(__dirname, '..')
const src = path.resolve(project, 'src')
const app = path.resolve(src, 'app')
const static = path.resolve(src, 'static')
const dist = path.resolve(project, 'dist')

const plugins = [
  new HtmlWebpackPlugin({
    filename: './index.html',
    template: 'index.html',
  }),
]

module.exports = ({prod = false, analyzer} = {}) => {
  if (analyzer) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    plugins.push(new BundleAnalyzerPlugin())
  }

  return {
    context: src,
    entry: './index',
    output: {
      filename: 'bundle.js',
      path: dist,
      publicPath: '/',
    },
    resolve: {
      alias: {
        app,
        static,
        'react': 'preact-compat',
        'react-dom': 'preact-compat',
      },
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          enforce: 'pre',
          loader: 'tslint-loader',
          options: {
            emitWarnings: !prod,
            emitErrors: prod,
            failOnHint: prod,
          },
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'awesome-typescript-loader',
          options: {
            babelCore: 'babel-core',
            errorsAsWarnings: !prod,
            useBabel: true,
          },
        },
        {
          test: /\.jpg$/,
          loader: 'file-loader',
          options: {
            outputPath: 'static/img/',
          },
        },
      ],
    },
    plugins,
    stats: {
      warningsFilter: /\/mobx-react\//,
    },
  }
}

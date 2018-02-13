const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const project = path.resolve(__dirname, '..')
const src = path.resolve(project, 'src')
const app = path.resolve(src, 'app')
const static = path.resolve(src, 'static')
const dist = path.resolve(project, 'dist')

module.exports = ({isProd = false} = {}) => ({
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
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          emitWarnings: !isProd,
          emitErrors: isProd,
          failOnHint: isProd,
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
        options: {
          errorsAsWarnings: !isProd,
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
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: 'index.html',
    }),
  ],
  stats: {
    warningsFilter: /\/mobx-react\//,
  },
})

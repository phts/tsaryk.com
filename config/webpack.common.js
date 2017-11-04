const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const project = path.resolve(__dirname, '..')
const src = path.resolve(project, 'src')
const app = path.resolve(src, 'app')
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
          emitErrors: isProd,
          failOnHint: isProd,
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'css-loader',
          },
        }),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: 'index.html',
    }),
    new ExtractTextWebpackPlugin('style.css'),
  ],
})

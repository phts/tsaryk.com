const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const src = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

module.exports = {
  context: src,
  entry: './index',
  output: {
    filename: 'bundle.js',
    path: dist,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
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
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
  },
}

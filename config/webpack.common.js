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
    cache: false,
    filename: './index.html',
    minify: {
      collapseInlineTagWhitespace: true,
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      minifyURLs: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
    },
    template: 'index.html',
  }),
]

const ES6_NODE_MODULES = [
  'rambda',
  'rambdax',
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
          exclude: /node_modules/,
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
          exclude: /node_modules/,
          loader: 'file-loader',
          options: {
            outputPath: 'static/img/',
          },
        },
        {
          test: /\.js$/,
          include: ES6_NODE_MODULES.forEach(x => path.resolve(project, `node_modules/${x}`)),
          loader: 'babel-loader',
          options: {
            babelrc: false,
            extends: path.join(project, '.babelrc'),
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

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const project = path.resolve(__dirname, '..')
const src = path.resolve(project, 'src')
const app = path.resolve(src, 'app')
const static = path.resolve(src, 'static')
const dist = path.resolve(project, 'dist')

const imgOutputPath = 'static/img/'


const ES6_NODE_MODULES = [
  'rambda',
  'rambdax',
]

const INDEX_HTML_IMAGES = [
  'loading-narrow.svg',
  'loading-wide.svg',
]

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
  new FaviconsWebpackPlugin({
    icons: {
      android: false,
      appleIcon: false,
      appleStartup: false,
      coast: false,
      favicons: true,
      firefox: false,
      opengraph: false,
      twitter: false,
      yandex: false,
      windows: false
    },
    logo: path.resolve(project, 'svg', 'favicon.svg'),
    prefix: 'static/icons-[hash:4]/',
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
          test: /\.svg$/i,
          include: INDEX_HTML_IMAGES.forEach(x => path.resolve(project, 'svg', x)),
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: imgOutputPath,
              },
            },
            {
              loader: 'image-webpack-loader',
              options: {
                svgo: {
                  enabled: true,
                },
              },
            },
          ],
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

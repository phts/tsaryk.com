'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const projectDir = path.resolve(__dirname, '..')
const srcDir = path.resolve(projectDir, 'src')
const appDir = path.resolve(srcDir, 'app')
const staticDir = path.resolve(srcDir, 'static')
const staticCursorsDir = path.resolve(staticDir, 'cursor')
const distDir = path.resolve(projectDir, 'dist')
const svgDir = path.resolve(projectDir, 'svg')

const outputImgPath = path.join('static', 'img')
const outputCursorsPath = path.join('static', 'cursor')


const ES6_NODE_MODULES = [
  'rambda',
  'rambdax',
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
      windows: false,
    },
    logo: path.join(svgDir, 'favicon.svg'),
    prefix: 'static/icons-[hash:4]/',
  }),
]

module.exports = ({prod = false, analyzer} = {}) => {
  if (analyzer) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    plugins.push(new BundleAnalyzerPlugin())
  }

  return {
    context: srcDir,
    entry: {
      app: './index',
    },
    output: {
      filename: '[name].js',
      path: distDir,
      publicPath: '/',
    },
    resolve: {
      alias: {
        app: appDir,
        static: staticDir,
        react: 'preact-compat',
        'react-dom': 'preact-compat',
      },
      extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendors: {
            priority: -10,
            test: /[\\/]node_modules[\\/]/,
          },
          default: {
            priority: -20,
          },
        },
      },
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
          test: /\.svg$/,
          include: svgDir,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: outputImgPath,
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
          test: /\.png$/,
          include: staticCursorsDir,
          exclude: /node_modules/,
          loader: 'file-loader',
          options: {
            name: '[name].[hash:4].[ext]',
            outputPath: outputCursorsPath,
          },
        },
        {
          test: /\.js$/,
          include: ES6_NODE_MODULES.forEach(x => path.resolve(projectDir, `node_modules/${x}`)),
          loader: 'babel-loader',
          options: {
            babelrc: false,
            extends: path.join(projectDir, '.babelrc'),
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

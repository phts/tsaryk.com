'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const md5 = require('md5-file').sync

const ES6_NODE_MODULES = ['rambda', 'rambdax']

const projectDir = path.resolve(__dirname, '..')
const srcDir = path.resolve(projectDir, 'src')
const appDir = path.resolve(srcDir, 'app')
const staticDir = path.resolve(srcDir, 'static')
const staticImgDir = path.resolve(staticDir, 'img')
const distDir = path.resolve(projectDir, 'dist')
const svgDir = path.resolve(projectDir, 'svg')

const outputImgPath = path.join('static', 'img')

const heroes3AssetsDir = path.join(appDir, 'components', 'item-pages', 'Heroes3Page')
const playingCardsAssetsDir = path.join(appDir, 'components', 'item-pages', 'PlayingCardsPage')
const playingCardsPng = path.join(playingCardsAssetsDir, 'playing-cards.png')
const playingCardsPngHash = md5(playingCardsPng).substring(0, 4)

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
    favicons: {
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
        'styled-components': path.join(appDir, 'styled-components'),
      },
      extensions: ['.tsx', '.ts', '.js'],
      modules: [appDir, 'node_modules'],
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
          exclude: /node_modules/,
          loader: 'awesome-typescript-loader',
          options: {
            babelCore: '@babel/core',
            errorsAsWarnings: !prod,
            useBabel: true,
          },
        },
        {
          test: /\.svg$/,
          include: path.join(staticImgDir, 'sprites'),
          loader: 'svg-sprite-loader',
        },
        {
          test: /\.svg$/,
          include: path.join(staticImgDir, 'loading'),
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
          test: /\.svg$/,
          include: playingCardsAssetsDir,
          use: [
            'svg-react-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                svgo: {
                  enabled: true,
                  plugins: [
                    {convertShapeToPath: false},
                    {inlineStyles: false},
                    {removeTitle: false},
                  ],
                },
              },
            },
            {
              loader: 'webpack-replace-loader',
              options: {
                attr: 'g',
                search: '__PLAYING_CARDS_PNG_HASH__',
                replace: playingCardsPngHash,
              },
            },
          ],
        },
        {
          test: /\.png$/,
          include: heroes3AssetsDir,
          exclude: /node_modules/,
          loader: 'file-loader',
          options: {
            name: '[name].[hash:4].[ext]',
            outputPath: outputImgPath,
          },
        },
        {
          test: /\.png$/,
          include: playingCardsAssetsDir,
          exclude: /node_modules/,
          use: [
            {
              loader: 'responsive-loader',
              options: {
                name: '[name]-[width].[ext]',
                outputPath: outputImgPath,
                sizes: [800, 1000, 1200],
              },
            },
          ],
        },
        {
          test: /\.js$/,
          include: ES6_NODE_MODULES.map(x => path.resolve(projectDir, `node_modules/${x}`)),
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

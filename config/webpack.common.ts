import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import webpack, {Configuration, WebpackPluginInstance} from 'webpack'
import {getCommitHash} from './getCommitHash'

const projectDir = path.resolve(__dirname, '..')
const srcDir = path.resolve(projectDir, 'src')
const appDir = path.resolve(srcDir, 'app')
const staticDir = path.resolve(srcDir, 'static')
const staticImgDir = path.resolve(staticDir, 'img')
const staticPagesDir = path.resolve(staticDir, 'pages')
const distDir = path.resolve(projectDir, 'dist')
const svgDir = path.resolve(projectDir, 'svg')

const outputImgPath = 'static/img'
const outputFontsPath = 'static/fonts'

const heroes3AssetsDir = path.join(appDir, 'components', 'item-pages', 'Heroes3Page')
const playingCardsAssetsDir = path.join(appDir, 'components', 'item-pages', 'PlayingCardsPage')

export interface Options {
  analyzer?: boolean
  prod?: boolean
  relative?: boolean
}

const plugins: WebpackPluginInstance[] = [
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
        favicons: true,
        yandex: false,
        windows: false,
      },
    },
    logo: path.join(svgDir, 'favicon.svg'),
    prefix: 'static/icons-[contenthash:4]/',
  }),
  new CopyPlugin({
    patterns: [{from: staticPagesDir, to: distDir}],
  }),
  new webpack.DefinePlugin({
    'process.env.VERSION': JSON.stringify(getCommitHash()),
  }),
]

if (process.env.BUILD_ANALYZER === 'true') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  plugins.push(new BundleAnalyzerPlugin())
}

const config: Configuration = {
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
        use: [
          {
            loader: 'ts-loader',
          },
        ],
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
        test: /\.png$/,
        include: heroes3AssetsDir,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '[name].[contenthash:4].[ext]',
          outputPath: outputImgPath,
        },
      },
      {
        test: /\.png$/,
        include: playingCardsAssetsDir,
        exclude: /node_modules/,
        loader: 'responsive-loader',
        options: {
          name: '[name]-[width].[contenthash:4].[ext]',
          outputPath: outputImgPath,
          sizes: [1200, 1000],
        },
      },
      {
        test: /\.otf$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '[name].[contenthash:4].[ext]',
          outputPath: outputFontsPath,
        },
      },
    ],
  },
  plugins,
}

export default config

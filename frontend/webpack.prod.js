/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')
const { CleanWebpackPlugin: clean } = require('clean-webpack-plugin')
const copy = require('copy-webpack-plugin')
const html = require('html-webpack-plugin')
const extract = require('mini-css-extract-plugin')

/* @type import('webpack').Configuration */

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-[contenthash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  optimization: {
    minimize: true,
    splitChunks: { chunks: 'all' },
  },
  module: {
    rules: [
      {
        use: [{ loader: 'babel-loader' }],
        test: /\.(js|ts|tsx)$/i,
        exclude: /node_modules/,
      },
      {
        use: [{ loader: extract.loader }, { loader: 'css-loader', options: { sourceMap: false } }],
        test: /\.css$/i,
      },
      {
        use: [{ loader: 'file-loader', options: { outputPath: 'images' } }],
        test: /\.(gif|jpeg|jpg|png|svg|webp)$/i,
      },
      {
        use: [{ loader: 'file-loader', options: { outputPath: 'fonts' } }],
        test: /\.(otf|ttf|woff|woff2)$/i,
      },
    ],
  },
  plugins: [
    new clean(),
    new copy({
      patterns: [{ from: path.resolve(__dirname, 'public'), to: path.resolve(__dirname, 'dist') }],
    }),
    new extract({
      filename: 'css/[name]-[contenthash].css',
      chunkFilename: 'css/[id]-[contenthash].css',
    }),
    new html({ template: path.resolve(__dirname, 'public/index.html') }),
  ],
}

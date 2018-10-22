const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const PATHS = require('./paths');

module.exports = env => ({
  entry: [path.resolve(PATHS.app, 'index.jsx')],
  output: {
    chunkFilename: '[name].[chunkhash:4].js',
    filename: '[name].[chunkhash:4].js',
    path: PATHS.dist
  },
  resolve: {
    extensions: ['.jsx', '.js', '.css'],
    modules: [PATHS.app, 'node_modules']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: './assets/index.html'
    }),
    new CopyPlugin([{ from: `config/env/env.*.json` }]),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: '../reports/client/report.html',
      generateStatsFile: true,
      statsFilename: '../reports/client/stats.json',
      openAnalyzer: false
    }),
    new CleanPlugin([PATHS.dist, PATHS.reports], { allowExternal: true })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial'
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
  }
});

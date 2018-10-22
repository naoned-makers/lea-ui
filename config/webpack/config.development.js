const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const PATHS = require('./paths');

module.exports = env => ({
  entry: [path.resolve(PATHS.app, 'index.jsx')],
  resolve: {
    extensions: ['.jsx', '.js', '.css'],
    modules: [PATHS.app, 'node_modules']
  },
  devtool: 'inline-source-map',
  devServer: {
    overlay: true,
    stats: 'errors-only',
    host: env.HOST,
    port: env.PORT
  },
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
    new CopyPlugin([
      { from: `config/env/env.${env.ENV}.json`, to: 'env.json' }
    ]),
    new HtmlPlugin({
      template: './assets/index.html'
    })
  ]
});

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src/index.ts'),
  output: {
    path: path.join(__dirname, 'docs')
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@app': __dirname
    }
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: path.join(__dirname, 'index.html')
    }),
  ]
}

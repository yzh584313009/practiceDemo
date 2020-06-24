const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry:{
    index: './example.tsx',
  },
  output: {
    filename: "index.js",
    path:  path.resolve(__dirname, 'dist/lib'),
    library: 'dsagrgaeeay',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module:{
    rules:[
      {
        test: /\.tsx?$/,
        loader:'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    })
  ]
}
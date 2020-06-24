const path = require('path');

module.exports = {
  mode: "production",
  entry:{
    index: './lib/index.tsx',
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
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  }
};
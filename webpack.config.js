const path = require('path')

var config = {
  entry: './public/main.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'public/index.js',
    crossOriginLoading: 'anonymous',
  },
  mode: 'development',
  devServer: {
    inline: true,
    port: 3000
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

module.exports = config
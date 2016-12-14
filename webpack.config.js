var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client/app/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'client/public'),
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: path.resolve(__dirname, 'client/public'),
    port: process.env.PORT || 3000
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: [
          /(node_modules)/
        ],
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react'
          ]
        }
      }
    ]
  }
};

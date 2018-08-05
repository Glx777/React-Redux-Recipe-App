var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'src/'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map'
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(s*)css$/,
        use:  ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};

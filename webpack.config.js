const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
  },
  externals: {
    oimo: true,
    cannon: true,
    earcut: true,
  },
  mode: 'development',
};

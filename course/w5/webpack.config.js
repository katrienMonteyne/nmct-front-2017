const   webpack = require("webpack"),
        path = require("path"),
        htmlWebpackPlugin = require("html-webpack-plugin"),
        cleanWebpackPlugin = require("clean-webpack-plugin"),
        extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
entry: ['./src/js/app.js', './src/scss/app.scss'],
output: {
  path: path.resolve(__dirname, 'dist/js'),
  filename: 'app.bundle.js'
},
plugins: [
  new cleanWebpackPlugin('[dist/js]'),
  new extractTextPlugin({
    filename: '../css/app.css',
    allChunks: true,
})
],
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    },
    {
        test: /\.(sass|scss)$/,
        loader: extractTextPlugin.extract(['css-loader', 'sass-loader'])
    }
  ]
},
devtool: 'inline-source-map'
};
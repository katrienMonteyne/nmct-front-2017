const webpack = require("webpack"),
      path = require("path"),
      htmlWebpackPlugin = require("html-webpack-plugin"),
      cleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'piano.bundle.js'
    },
    plugins: [
        new cleanWebpackPlugin('[dist/js]'),
        /*new htmlWebpackPlugin({
            title: '$oundmaker',
            filename: '../index.html'
        })*/
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
          }
        ]
      },
    devtool: 'inline-source-map'
};
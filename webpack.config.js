const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
        {
           test: /\.css$/,
           use: ExtractTextPlugin.extract({
           fallback: "style-loader",
           use: "css-loader"
           })
        },
        {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
        },
        {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
        },
        {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
          'file-loader'
         ]
        }        
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}

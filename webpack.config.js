var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|test)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'less-loader'
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                        }
                    },
                ],
            },
        ]
    },
    plugins: [
            new HtmlWebpackPlugin({
                inlineSource: '.(js|css)$',
                filename: 'index.html',
                title: "Audio-DB",
                meta: {
                    charset: "utf-8",
                    name: "vieport",
                    content: "initial-scale=1.0,width=device-width"
                },
                template: 'src/index.ejs'
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css",
                ignoreOrder: false
            }),
    ],
    output: {
        path: __dirname,
        filename: "index.js",
    }
}

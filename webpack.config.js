var webpack = require('webpack');

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
    output: {
        path: __dirname + "result",
        filename: "index.js",
    }
}

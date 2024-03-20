const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: path.join(__dirname, "src", "index.js"),
    devtool: 'inline-source-map',
    output:{
        path: path.resolve(__dirname, "dist"),
    },
    module:{
        rules:[
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
        new MiniCssExtractPlugin(),
    ]
}
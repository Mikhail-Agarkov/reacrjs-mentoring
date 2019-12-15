const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: './src/index.jsx',

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({template: "./src/index.html"}),
        new CleanWebpackPlugin(),
        ...(isDev ? [] : [new MiniCssExtractPlugin()])
    ],

    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [path.resolve(__dirname, 'src')],
                loader: 'babel-loader'
            },
            {
                test: /\.s[ac]ss$/,
                include: [path.resolve(__dirname, 'src')],
                use: [
                    (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                            },
                            sourceMap: isDev
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};

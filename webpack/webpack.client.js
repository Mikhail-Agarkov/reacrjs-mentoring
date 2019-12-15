const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.config');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
    name: 'client',

    target: 'web',

    entry: [
        isDevMod && 'webpack-hot-middleware/client',
        './src/client/index.jsx',
    ].filter(Boolean),

    plugins: [
        isDevMod && new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        })
    ].filter(Boolean),

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                include: /src/,
                use: [
                    isDevMod ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]-[hash:5]',
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    }
                ]
            }
        ]
    }
});

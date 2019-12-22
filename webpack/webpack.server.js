const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.config');

module.exports = merge(common, {
    name: 'server',

    target: 'node',

    entry: ['babel-polyfill', './src/server/renderer.jsx'],

    externals: [nodeExternals()],

    output: {
        filename: 'js/server.js',
        libraryTarget: 'commonjs2',
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                include: /src/,
                use: [
                    {
                        loader: 'css-loader/locals',
                        options: {
                            modules: true,
                            localIdentName: '[name]-[hash:5]',
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },

});

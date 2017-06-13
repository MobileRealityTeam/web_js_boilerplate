const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval',

    entry: [
        'webpack-hot-middleware/client',
        './client/src/index.js'
    ],

    output: {
        path: path.join(__dirname, "client/public"),
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                CLIENT: JSON.stringify(true),
                'NODE_ENV': JSON.stringify('development'),
            }
        })
    ],

    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            'client',
            'node_modules'
        ]
    },

    module: {
        rules: [{
                test: /\.js?$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'client')
            }, {
                test: /\.scss?$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }],
                include: path.join(__dirname, 'client/src', 'styles')
            }, {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }]
            }, {
                test: /\.png$/,
                loader: 'file-loader'
            }, {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader'
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }]
    }
};

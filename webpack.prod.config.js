const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',

    entry: [
        './client/src/index.js'
    ],

    output: {
        path: path.join(__dirname, 'client/public'),
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],

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
        }]
    }
};

var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var parentDir = path.join(__dirname, '../');

module.exports = {
    entry: [
        path.join(parentDir, 'index.js')
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },{
                test: /\.less$/,
                loaders: ['style-loader', 'css-loader', 'less-loader']
            },{
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
            },{
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000,
                            mimetype: 'application/font-woff'
                        }
                    }

                ]
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            }, {
                test: /\.ico$/,
                loader: 'file-loader?name=[name].[ext]'  // <-- retain original file name
            }
        ]
    },
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: parentDir + '/index.html',
            filename: 'index.html',
            inject: 'body',
            favicon: './icons/veriscribe.ico',
        })
    ],
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}

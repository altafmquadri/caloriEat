const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    require('dotenv').config({path: '.env.development'})
}

module.exports = env => {
    const isProduction = env === 'production'
    return {
        entry: ['./src/index.js'],
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js',
            publicPath: '/dist/'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader', 'eslint-loader']
                },
                {
                    test: /\.s?css$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }
            ]
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            port: 3000,
            publicPath: '/dist/'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: '../index.html'
            }),
            new MiniCssExtractPlugin({
                filename: 'styles.css'
            }), 
            new webpack.DefinePlugin({
                'process.env.EDAMAM_APP_ID': JSON.stringify(process.env.EDAMAM_APP_ID),
                'process.env.EDAMAM_APP_KEY': JSON.stringify(process.env.EDAMAM_APP_KEY)
            })
        ]
    }
}
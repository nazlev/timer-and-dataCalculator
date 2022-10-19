const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: './src/main.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
    },
    plugins: [
        // new BundleAnalyzerPlugin(),//оптимизация
        new MiniCssExtractPlugin({
            filename: '[name][contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        })
        
    ],
    module: {
        rules: [
            {
                test: /\\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\\.mp3$/i,
                use: 'file-loader'
            }
        ]
    },
    devServer: {
        port: 3000
    }
}
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');

process.env.NODE_ENV = 'development'

module.exports = {
    //webpack解析的入口文件
    entry: './src/index.js',
    // 文件输出位置
    output: {
        clean: true,
        // webpack打包的文件名字
        filename: 'bundle.js',
        // webpack打包的文件路径
        path: path.resolve(__dirname, 'dist')
    },
    module: {

    },
    plugins: [

    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    devtool: 'source-map'
}

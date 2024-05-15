const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    //webpack解析的入口文件
    entry: './src/index.js',
    // mode: 'development',
    mode: 'production',
    // 配置路径别名
    resolve: {
        alias: {
            '@js': path.resolve(__dirname, 'src/js/'),
        },
    },
    module: {
    },
    // 插件
    plugins: [
        new ESLintPlugin({
            // 指定检查文件的根目录
            context: path.resolve(__dirname, "src"),
        }),
    ],
}
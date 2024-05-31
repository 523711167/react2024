const path = require('path')
const PluginTest = require('./plugin/test-plugin')

module.exports = {
    //webpack解析的入口文件
    entry: './src/index.js',
    // 文件输出位置
    output: {
        // webpack打包的文件名字
        filename: 'bundle.js',
        // webpack打包的文件路径
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new PluginTest()
    ],
    mode: 'development'
}

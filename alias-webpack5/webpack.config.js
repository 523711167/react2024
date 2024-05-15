const path = require('path');

console.log(__dirname)
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
}
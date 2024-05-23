const path = require('path')

module.exports = {
    //webpack解析的入口文件
    entry: './src/index.js',
    // 文件输出位置
    mode: 'production',
    output: {
        // webpack打包的文件名字
        filename: 'main.js',
        // webpack打包的文件路径
        path: path.resolve(__dirname, 'dist')
    },
    // lorder配置属性
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    // 这里还可以配置其他loader优化,比如可以去空格缩小体积
                    // xxxx-loader
                    // style-loader的作用: css-loader后的css通过style-loader插入到index.html的style标签里
                    "style-loader",
                    // css-loader的作用: 处理js的import语法 css文件中@import语法,url的语法,sourceMap,
                    // 对比url-loader 可以对文件进行字符串,文件输出位置处理,import导入图片处理
                    "css-loader",
                    // yarn add postcss postcss-loader -d
                    // postcss-loader的作用: css的预处理器,可以配置不同的插件实现功能,本身只是没啥用
                    // 加载autoprefixer 配置浏览器兼容版本后,会自定添加css前缀
                    // 加载stylelint 类似eslint,对css代码进行检查
                    // 加载postcssPresetEnv 类似ES6转换ES5语法,支持最新的css特性
                    "postcss-loader",
                    // yarn add sass sass-loader -d
                    // sass-loader作用: 编译sass文件为css
                    // "sass-loader",
                ],
            },
        ],
    },

}

const path = require('path');

module.exports = {
    //webpack解析的入口文件
    entry: './src/index.js',
    // mode: 'development',
    mode: 'production',
    resolve: {
        alias: {
            '@js': path.resolve(__dirname, 'src/js/'),
            '@images': path.resolve(__dirname, 'src/images/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024 * 60,
                            //输出的名称
                            name: '[hash]-[name].[ext]',
                            // 输出目录dist/images/
                            outputPath: 'images'
                        }
                    },
                ],
                type: 'javascript/auto'
            },
        ]
    }
}
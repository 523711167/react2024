const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// webpack5推荐使用css-minimizer-webpack-plugin,来实现压缩css代码
// const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const { resolve } = require('path');
const { loader } = require('mini-css-extract-plugin');

process.env.NODE_ENV = 'development'

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
    // lorder配置属性
    module: {
        rules: [
            {
                // ES6的语法转换为ES5的语法
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    //@babel/preset-env包含一堆插件集合
                    presets: [
                        '@babel/preset-env',
                    ],
                    // plugins: ['@babel/plugin-transform-runtime']
                  }
                }
            },
            {
                test: /\.css$/,
                use: [
                    // 将css输出到页面</head>标签
                    // 'style-loader',
                    // 将样式文件输出为css文件,默认的css样式在bundle.js里面
                    MiniCssExtractPlugin.loader,
                    // 解析import语法
                    'css-loader',
                    // webpack和postcss的桥梁
                    // postcss为不同的浏览器适配css样式
                   {
                       loader: 'postcss-loader',
                       options: {
                        postcssOptions: {
                            plugins: [
                              [
                                //选择开发环境和生产环境配置进行打包
                                'postcss-preset-env',
                              ],
                            ],
                          },
                       }
                   }
                ]

            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // sourceMap: true
                        }
                    },
                    // 编译成css文件
                    {
                        loader: 'less-loader',
                        options: {
                            // sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                // 打包import引入的图片文件
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 小于8192的文件，使用base64文件处理
                            limit: 8192,
                            // html-loader处理的图片默认是commonjs模块方式require('')，
                            // url-loader处理的时候需要关闭es6(import '')
                            esModule: false,
                            name: '[1]-[name].[ext]',
                            // 输出目录dist/images/
                            outputPath: 'images'
                        }
                    }
                ],
                //在大于8192的情况下，不会同时生成base和图片文件
                type: 'javascript/auto',

            },
            {
                test: /\.html$/,
                // 处理html首页引入的图片文件
                loader: 'html-loader'
            },
            {
                // 没有用啊
                test: /\.(tff)$/,
                loader: 'file-loader',
                options: {
                    publicPath: 'font',
                    name: '[1]-[name].[ext]',
                },
            }
        ]
    },
    plugins: [
        // 默认输出一个空的html文件，包含打包后的bundle.js文件
        new HtmlWebpackPlugin({
            // 指定一个html文件，作为默认输出的html文件
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            // 替换默认的输出文件位置和文件名字
            filename: 'css/main.css'
        }),
    ],
    optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
        ],
      },
    watch: true,
    mode: 'production',
    devServer: {
        // webpack打包文件的路径
        static: resolve(__dirname, 'dist'),
        compress: true,
        port: 3000
    },
    // 默认eval                  每个module被eval包裹执行,并且在末尾追加注释//sourceURL定位源文件代码
    // source-map               单独生成xx.js.map文件,main.js文件中添加sourceMappingURL=xx.js.map定位源文件代码
// inline-source-map            不会生成xx.js.map文件,但是main.js文件中添加sourceMappingURL=data:application/json;charset=utf-8;base64,文件base64字符串,可以定位源文件代码
    // hidden-source-map        单独生成xx.js.map文件,但是main.js中没有添加sourceMappingURL=xx.js.map,不可以定位源文件代码
    // eval-source-map          每个module被eval包裹执行,main.js文件中添加sourceMappingURL=data:application/json;charset=utf-8;base64,文件base64字符串,可以定位源文件代码
    // nosources-source-map     外部 未知   提示错误原因,可以直接指向源代码位置,看不到源代码
    // cheap-source-map         单独生成xx.js.map文件,main.js文件中添加sourceMappingURL=xx.js.map定位源文件代码,但是xx.js.map内容没有source-map生成的xx.js.map丰富,比如缺少代码在那一列,如果经过babel处理之后的代码,无法定位源文件
    // cheap-moudle-source-map  单独生成xx.js.map文件,同上,但是经过babel处理的代码还是可以定位源代码文件
    devtool: 'source-map'
}

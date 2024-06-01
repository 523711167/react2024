##### package.json文件中依赖版本的含义
1. 1.2.3
   1表示大版本 2表示大版本新增的功能 3表示修复的BUG    
2. ~1.0.2         
   表示安装最新的1.0.x的版本
3. ^1.0.2 
   表示安装最新的1.x.x的版本
##### webpack中的chunk含义
1. module 
   webpack.package.json配置文件module配置处理不同文件
2. chunk
   - chunk从配置entry入口文件,层层解析,经过module处理,最终汇聚成chunk.
   - 异步模块加载,同样也属于入口文件,经过module处理,最终汇聚成chunk.
   - 配置代码分割也会汇聚成chunk.
3. bundle
   最终打包的文件称为bundle,比如main.js main.map.js为两个bundle,但他们属于同一个chunk
4. webpack的watch功能
   只需要在webpack,package,js文件中添加配置即可,执行npx webpack就会监听文件改动
##### webpack的生命执行流程
1. webpack读取webpack.config.js文件,插件初始化,执行construct方法
2. 创建compiler对象,便利所有插件,调用插件apply方法(apply用来注册插件在生命周期内执行的函数)
3. 执行编译打包流程,执行生命周期函数
##### webpack如何调试
1. package.json配置
```javascript
  "scripts": {
    "debug": "node --inspect-brk ./node_modules/webpack-cli/bin/cli.js"
  }
```
2. yarn run debug,打入debug断点
3. 打开浏览器等待
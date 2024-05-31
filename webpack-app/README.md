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
   chunk从配置entry入口文件,层层解析,经过module处理,最终汇聚成chunk.
   异步模块加载,同样也属于入口文件,经过module处理,最终汇聚成chunk
   配置代码分割也会汇聚成chunk
3. bundle
   最终打包的文件称为bundle,比如main.js main.map.js为两个bundle,但他们属于同一个chunk
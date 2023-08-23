const proxy = require('http-proxy-middleware')

/**
 * 原理
 * fetch -->  某个服务器3000转发到http://localhost:5000 -->  http://localhost:5000（因为没有浏览器的同源策略影响可以正常发送）
 * @param app
 */
module.exports = function (app) {
    app.use(
        //路径1⃣以/api1开头的URI，会代理到http://localhost:5000
        proxy('/api1', {
            target: 'http://localhost:5000',
            //控制http协议host字段,服务器收到请求头中host修改
            //true 代表修改为代理服务器
            //false 代表源主机地址
            changeOrigin: true,
            // 重写路径
            pathRewrite: {
                '^/api1': ''
            }
        })
    )
};
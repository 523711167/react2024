


module.exports = class PluginTest {
    constructor() {
        console.log("PluginTest constructor")
    }

    apply(compiler) {
        //tap注册钩子 同步异步都可以
        debugger
        compiler.hooks.environment.tap('pluginTest', () => {
            console.log('environment pluginTest');
        })

        // 串行执行 ,也有并行执行的 看文档说明
        compiler.hooks.emit.tap('pluginTest', (compilation) => {
            console.log('emit tap pluginTest');
        })

        compiler.hooks.emit.tapAsync('pluginTest', (compilation, callback) => {
            setTimeout(()=> {
                console.log('emit tapAsync pluginTest');
                callback()
            }, 1000)
        })

        compiler.hooks.emit.tapPromise('pluginTest', (compilation) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log('emit tapPromise pluginTest');
                    resolve()
                }, 2000)
            })
        })
    }
}
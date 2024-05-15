module.exports = {
    // 继承 Eslint 规则
    extends: ["eslint:recommended"],
    //设置运行环境,跳过对应环境的全局变量检查
    env: {
        // 启用node中全局变量
        node: true,
        // 启用浏览器中全局变量
        browser: true,
    },
    // ESLint解析器解析代码时,可以指定用哪个js版本
    // 注意: 需要把js转换为ESLint可以识别的语法解析树
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
    },
    //指定单挑检查规则
    rules: {
        "no-var": 2, // 不能使用 var 定义变量
    }
};
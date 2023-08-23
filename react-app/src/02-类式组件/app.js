import React, {Component} from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        //App实例上添加test属性并且test绑定App实例
        this.test = this.test.bind(this)
    }

    //test方法在App的原型上
    test() {

    }


    render() {
        return (
            <div>
                Hello Class
            </div>
        );
    }
}

export default App;
/**
 * 解决App实例上在React环境中this丢失的方法
 * 1.使用constructor构造函数解决
 * 2.使用lambad表达式解决
 */

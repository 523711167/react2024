import React, {Component} from 'react';

const Context = React.createContext("兜底拼夕夕");
const { Provider } = Context;

/**
 * 第一 定义const Context = React.createContext();可以传递默认值，在组件匹配不到最近的Provider使用
 * 第二 使用Provider组件包裹
 * 第三 定义static contextType = Context，之后通过this.context获取
 * @Author pxx
 * @DATA 2023/8/27 21:12
 */
class Index extends Component {

    render() {
        return (
            <div>
                我是爷爷组件,我向下面传递姓名彭小曦
                <Provider value={"彭小曦"}>
                    <Father/>
                </Provider>
            </div>
        );
    }
}

export default Index;


class Father extends Component {
    render() {
        return (
            <div>
                我是父亲组件
                <Children/>
            </div>
        );
    }
}

class Children extends Component {

    static contextType = Context

    render() {
        return (
            <div>
                我是儿子组件,我接收到Index组件传递的value={this.context}
            </div>
        );
    }
}
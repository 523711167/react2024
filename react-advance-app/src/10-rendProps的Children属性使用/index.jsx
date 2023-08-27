import React, {Component} from 'react';

/**
 * react作用域插槽技术实现方案
 * 1. 通过FuncProps函数实现
 * 2. 通过childrenProps实现
 * @Author pxx
 * @DATA 2023/8/28 01:03
 */
class Index extends Component {
    render() {
        return (
            <div>
                <Parent>
                    <Children>

                    </Children>
                </Parent>
            </div>
        );
    }
}

export default Index;


class Parent extends Component {

    render() {
        return (
            <div>
                我是父组件
                {this.props.children}
            </div>
        )
    }
}


class Children extends Component {

    render() {
        return (
            <div>
                我是子组件
            </div>
        )
    }
}
import React, {Component} from 'react';
import Count from "./containers/Count";
import store from "./redux/store";

/**
 * react-redux版本
 * 第一步
 *  通过UI组件创建connect()(UI)一个容器组件，同时connect()入参传递两个函数，函数的返回值结果作为props传递给UI组件
 *  何时执行函数
 *  经过实际测试，mapStateToProps在dispatch执行后,都会调用传递给UI组件
 *  mapDispatchToProps函数只有createStore，初始化的时候调用
 * 第二步
 *  connect(mapStateToProps(state(store.getState())), mapDispatchToProps(store.dispatch())() funA和funB返回值代表容器组件传递给UI组件的props
 * 第三步
 *  使用react-redux之后，不需要通过store.subscribe()，监听最外层的render函数
 * 第四步
 *  使用react-redux需要在容器组件传入store，但是可以通过Provide标签，可以自动给所有的容器组件传递store
 */
class Index extends Component {

    render() {
        return (
            <div>
                <Count store={ store }/>
            </div>
        );
    }
}

export default Index;
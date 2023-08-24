import React, {Component} from 'react';
import Count from "./containers/Count";
import store from "./redux/store";
import {Provider} from "react-redux";

/**
 * 1.containers的index.jsx优化
 * 2.store.subscribe无需监听
 * 3.react-redux的Provider属性传递store属性
 * 4.容器组件和UI组件优化
 * 5.redux包结构优化
 */
class Index extends Component {

    render() {
        return (
            <div>
                <Provider store={store}>
                    <Count/>
                </Provider>
            </div>
        );
    }
}

export default Index;
import React, {Component} from 'react';
import store from "./redux/store";
import {Provider} from "react-redux";

import Count from "./containers/Count";
import Person from "./containers/Person";

/**
 * 1.需要通过combineReducer组合多个reducer
 * 2.mapStateToProps函数返回需要传递给组件的props
 * 3.reducer需要是纯函数
 */
class Index extends Component {

    render() {
        return (
            <div>
                <Provider store={store}>
                    <Count/>
                    <br/>
                    <Person/>
                </Provider>
            </div>
        );
    }
}

export default Index;
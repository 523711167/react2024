import React, {Component} from 'react';
import Count from "./component/Count";

/**
 * 函数action为异步action
 *  需要下载插件redux-thunk, 然后createStore(countReduce, applyMiddleware(thunk))
 * 对象action为同步action
 */
class Index extends Component {

    render() {
        return (
            <div>
                <Count/>
            </div>
        );
    }
}

export default Index;
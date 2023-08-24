import React, {Component} from 'react';
import Count from "./component/Count";

// 第一步
// 创建处理state值的func，第一个参数为当前状态的state，第二个参数为一个action对象，也就是Reducer
// 第二步
// 通过reducer创建并且暴露store对象,页面数据通过store.getState()获取
// 注意创建store的时候会执行一次countReduce，可以用来初始化
// 第三步
// 在事件发生的节点通过store.dispatch({type: '', data: {}})分发action,修改state
// 第四步
// 在数据发生变化之后，需要setState更新数据，通过store.subscribe(() => {ReactDOM.render(<App />, document.getElementById("root"))})
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
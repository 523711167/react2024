import React, {Component} from 'react';


import Children from "../Children";
import ErrorBoundary from "../ErrorBoundary";
/**
 *
 * @Author pxx
 * @DATA 2023/8/28 01:30
 */
class Index extends Component {

    state = {
        hasError: false
    };

    static getDerivedStateFromError(error) {
        // 更新状态，以便下一次渲染将显示后备 UI。
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // 示例“组件堆栈”：
        //   在 ComponentThatThrows 中（由 App 创建）
        //   在 ErrorBoundary 中（由 APP 创建）
        //   在 div 中（由 APP 创建）
        //   在 App 中
    }

    render() {
        return (
            <div>
                我是父组件
                {/*第一种*/}
                { this.state.hasError ? <h1>服务器繁忙</h1> : <Children />}
                {/*第二种*/}
                <ErrorBoundary fallback={<h1>服务器太繁忙</h1>}>
                    <Children />
                </ErrorBoundary>
            </div>
        );
    }
}

export default Index;



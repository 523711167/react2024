import React, {Component} from 'react';

class Index extends Component {


    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("第一步 componentWillUpdate(nextProps, nextState, nextContext)");
    }

    render() {
        console.log("第二步 render() ");
        return (
            <div>
                测试forceUpdate的生命周期
                <button onClick={this.forceUpdateState}>强制更新</button>
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("第三步 componentDidUpdate(prevProps, prevState, snapshot)");
    }


    componentWillUnmount() {
        console.log("第四步 componentWillUnmount()");
    }

    forceUpdateState = () => {
        console.log("开始执行forceUpdate");
        this.forceUpdate();
    }

}

export default Index;
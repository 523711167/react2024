import React, {Component} from 'react';
import ReactDOM from "react-dom/client";
import root from "../index";

class Index extends Component {

    state = {
        total: 0
    }

    static getDerivedStateFromProps(props, state) {
        console.log("第一步  static getDerivedStateFromProps(props, state)");
        return null
    }

    /**
     *
     * @param nextProps
     * @param nextState
     * @param nextContext
     * @returns {boolean}
     */
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("第二步  shouldComponentUpdate(nextProps, nextState, nextContext)");
        return true;
    }

    render() {
        console.log("第三步 render()");
        return (
            <div>
                当前总数{this.state.total}
                <button onClick={this.add}>+1</button>
                <button onClick={this.dead}>卸载组件</button>
            </div>
        );
    }

    /**
     * 在最近一次渲染输出（提交到 DOM 节点）之前调用。
     * 它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。
     * 此生命周期的任何返回值将作为参数传递给 componentDidUpdate()的snapshot。
     * @param prevProps
     * @param prevState
     * @returns {{}}
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("第四步 getSnapshotBeforeUpdate(prevProps, prevState)");
        return {}
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("第五步 componentDidUpdate(prevProps, prevState, snapshot)");
    }

    componentWillUnmount() {
        console.log("第六步   componentWillUnmount()");
    }

    add = () => {
        this.setState( { total: ++this.state.total })
    }

    dead = () => {
        root.unmount()
    }

}

export default Index;
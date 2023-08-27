import React, {Component} from 'react';

class Index extends Component {

    state = {
        total: 0
    }

    /**
     * 当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用
     * @param nextProps 下一个即将被应用到组件的属性（props）。
     * @param nextState 下一个即将被应用到组件的状态（state）。
     * @param nextContext 下一个即将被应用到组件的上下文（context）。 todo 我发现this.state和nextState一样的 react18
     * @returns {boolean} 判断 React 组件的输出是否受当前 state 或 props 更改的影响。默认行为是 state 每次发生变化组件都会重新渲染。大部分情况下，你应该遵循默认行为。
     *                    请注意，返回 false 并不会阻止子组件在 state 更改时重新渲染。
     *                    notes 我发现父组件更新，传递新的props给子组件，父组件返回false，子组件不更新,因为父组件render导致子组件render react18
     */
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('第一步执行  shouldComponentUpdate(nextProps, nextState, nextContext)');
        return true
    }

    /**
     *
     * @param nextProps
     * @param nextState
     * @param nextContext
     */
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('第二步执行  componentWillUpdate(nextProps, nextState, nextContext)');
    }

    render() {
        console.log('第三步执行  render()');
        return (
            <div>
                当前的总数是{this.state.total}
                <button onClick={this.add} >+1</button>
            </div>
        );
    }

    /**
     * componentDidUpdate() 会在更新后会被立即调用
     * @param prevProps 上一个 props 的值。
     * @param prevState 上一个 state 的值。
     * @param snapshot 如果组件实现了 getSnapshotBeforeUpdate() 生命周期（不常用），
     *                 则它的返回值将作为 componentDidUpdate() 的第三个参数 “snapshot” 参数传递。
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevState);
        console.log('第四步执行  componentDidUpdate(prevProps, prevState, snapshot)');
    }

    componentWillUnmount() {
        console.log('第五步执行   componentWillUnmount()');
    }

    add = () => {
        console.log('开始执行setSate');
        this.setState({ total : ++this.state.total })
    }
}

export default Index;
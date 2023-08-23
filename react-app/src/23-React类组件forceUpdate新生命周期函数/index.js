import React, {Component} from 'react';

class Index extends Component {

    state = {
        total : 0
    }

    static getDerivedStateFromProps(props, state) {
        console.log("第一步  static getDerivedStateFromProps(props, state)");
        return null
    }

    render() {
        console.log("第二步 render()");
        return (
            <div>
                当前总数{this.state.total}
                <button onClick={this.forceUpdateState}>强制刷新</button>
            </div>
        );
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("第三步 getSnapshotBeforeUpdate(prevProps, prevState)");
        return {}
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("第四步 componentDidUpdate(prevProps, prevState, snapshot)");
    }

    componentWillUnmount() {
        console.log("第五步   componentWillUnmount()");
    }

    forceUpdateState = () => {
        this.forceUpdate()
    }
}

export default Index;
import React, {Component} from 'react';
import store from "../../redux/store";

class Index extends Component {

    render() {
        return (
            <div>
                计算的结果为：{store.getState()}
                <button onClick={this.add}>+1</button>
                <button onClick={this.sub}>-1</button>
                <button onClick={this.addIfOdd}>奇数+1</button>
                <button onClick={this.addSync}>异步+1</button>
            </div>
        );
    }

    add = () => {
        store.dispatch({ type: 'add', data: 1 })
    }

    sub = () => {
        store.dispatch({ type: 'sub', data: 1 })

    }

    addIfOdd = () => {

    }

    addSync = () => {

    }
}

export default Index;
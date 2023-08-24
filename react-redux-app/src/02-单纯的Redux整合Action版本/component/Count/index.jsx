import React, {Component} from 'react';
import store from "../../redux/store";
import {createAddAc, createSubAc} from "../../redux/count_action";

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
        store.dispatch(createAddAc(1))
    }

    sub = () => {
        store.dispatch(createSubAc(1))

    }

    addIfOdd = () => {

    }

    addSync = () => {

    }
}

export default Index;
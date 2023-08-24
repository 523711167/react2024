import React, {Component} from 'react';
import {createAddAc, createSubAc, createSubSyncAc} from "../../redux/count_action";

class Index extends Component {

    render() {
        return (
            <div>
                计算的结果为：{this.props.count}
                <button onClick={this.add}>+1</button>
                <button onClick={this.sub}>-1</button>
                <button onClick={this.addIfOdd}>奇数+1</button>
                <button onClick={this.addSync}>异步+1</button>
            </div>
        );
    }

    add = () => {
        this.props.add(1)
    };

    sub = () => {
        this.props.sub(1)
    }

    addIfOdd = () => {

    }

    addSync = () => {
        this.props.addSync(1)
    }
}

export default Index;
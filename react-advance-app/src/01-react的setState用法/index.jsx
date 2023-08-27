import React, {Component} from 'react';

/**
 * setState的两种写法
 */
class Index extends Component {

    state = {
        count: 0
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <input onClick={ this.sum }  type="button" value="写法1" />
                <input onClick={ this.sum2 }  type="button" value="写法2" />
            </div>
        );
    }

    sum = () => {
        this.setState((preState, preProps) => {
            return { count: preState.count + 1 }
        }, () => {

        });
    }

    sum2 = () => {
        this.setState({ count: this.state.count + 1 },
            () => {

            });
    }

}


export default Index;
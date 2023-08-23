import React, {Component} from 'react';

class Index extends Component {

    state = {
        carName: '奔驰'
    }

    //测试父组件返回false会影响子组件Render吗
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return false
    // }

    render() {
        return (
            <div>
                <div>我是A组件</div>
                <button onClick={this.changeCar}>换车</button>
                <Car carName={this.state.carName} />
            </div>
        );
    }

    changeCar = () => {
        this.setState({ carName: '奥迪' })
    }
}

export default Index;


class Car extends Component {

    /**
     *
     * @param nextProps 下一个即将要应用到组件Props
     * @param nextContext 下一个即将要应用到组件context
     */
    componentWillReceiveProps(nextProps, nextContext) {
        console.log("第一步   componentWillReceiveProps(nextProps, nextContext)");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("第二步 shouldComponentUpdate(nextProps, nextState, nextContext)");
        return true
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("第三步     componentWillUpdate(nextProps, nextState, nextContext)");
    }

    render() {
        console.log("第四步    render() ");
        return (
            <div>
                <div>我是B组件,接收到{this.props.carName}</div>
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("第五步 componentDidUpdate(prevProps, prevState, snapshot)");
    }

    componentWillUnmount() {
        console.log("第六步     componentWillUnmount()");
    }
}


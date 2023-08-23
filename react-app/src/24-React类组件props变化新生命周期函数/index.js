import React, {Component} from 'react';

class Index extends Component {

    state = {
        carName: "奔驰"
    }

    render() {

        return (
            <div>
                <div>我是A组件</div>
                <button onClick={this.changeCar}>我要换车</button>
                <button onClick={this.changeNoneThing}>父组件setState</button>
                <Car {...this.state}/>
            </div>
        );
    }

    changeCar = () => {
        this.setState({ carName: "奥迪" })
    }

    //父组件setState，子组件必定执行生命周期，只不过在子组件shouldComponentUpdate过滤
    changeNoneThing = () => {
        this.setState({} )
    }

}

export default Index;


class Car extends Component {

    static getDerivedStateFromProps(props, state) {
        console.log("第一步  static getDerivedStateFromProps(props, state)");
        return null
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("第二步  shouldComponentUpdate(nextProps, nextState, nextContext)");
        return true;
    }

    render() {
        console.log("第三步 render()");
        return (
            <div>
                <div>我是B组件</div>
                <div>我现在的汽车是{this.props.carName}</div>
            </div>
        );
    }

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

}
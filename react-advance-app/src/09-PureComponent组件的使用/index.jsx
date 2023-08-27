import React, {Component, PureComponent} from 'react';

/**
 * PureComponent重写shouldComponentUpdate,会比较nextProps、nextState和prpos、state判断是否需要render
 * Component是没有重写的，默认返回true
 * @Author pxx
 * @DATA 2023/8/28 00:42
 */
class Index extends Component {

    state = {
        carName: '奥迪Q7'
    }

    render() {
        return (
            <div>
                我是父组件,我现在开的是{this.state.carName}
                <button onClick={this.changeCar}>我要换车</button>
                <Children carName={this.state.carName}/>
            </div>
        );
    }

    changeCar = () => {
        this.setState({ carName: '奔驰' });
    }
}

export default Index;


class Children extends Component {

    render() {
        return (
            <div>
                我是子组件，我现在开的是{this.props.carName}
            </div>
        )
    }
}

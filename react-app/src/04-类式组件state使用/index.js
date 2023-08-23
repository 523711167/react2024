import React, {Component} from 'react';

class Index extends Component {

    state = { isHot: true }

    changeWeather = () => {
        this.setState({ isHot : !this.state.isHot})
    }

    render() {
        console.log(this);
        return (
            <div onClick={this.changeWeather}>
                今天天气{this.state.isHot ? "炎热": "凉快"}
            </div>
        );
    }
}

export default Index;
/**
 * 1.setState方法驱动更新，且使用的是对象合并的操作。
 */
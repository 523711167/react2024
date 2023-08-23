import React, {Component} from 'react';

class Index extends Component {

    constructor(props) {
        console.log("第一步 constructor(props) ");
        super(props);
    }

    /**
     * 返回state，具体使用参考官网 todo 使用场景很少
     * @param props
     * @param state
     * @returns {*}
     */
    static getDerivedStateFromProps(props, state) {
        console.log("第二步  static getDerivedStateFromProps(props, state)");
        return null
    }

    render() {
        console.log("第三步   render()");
        return (
            <div>
                测试组件挂载生命周期
            </div>
        );
    }

    componentDidMount() {
        console.log("第四步   componentDidMount()");
    }

    componentWillUnmount() {
        console.log("第五步   componentWillUnmount()");
    }
}

export default Index;
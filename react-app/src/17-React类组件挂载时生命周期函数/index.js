import React, {Component} from 'react';
import ReactDOM, { createRoot } from "react-dom/client";

class Index extends Component {

    constructor(props) {
        super(props);
        console.log('第一步执行  constructor(props)');
    }

    componentWillMount() {
        console.log('第二步执行 componentWillMount()');
    }

    render() {
        console.log('第三步执行  render() ');
        return (
            <div id="life">
                测试挂载生命周期
            </div>
        );
    }

    componentDidMount() {
        console.log('第四步执行 componentDidMount()');
    }

    componentWillUnmount() {
        console.log('第五步执行 componentWillUnmount()');
    }
}

export default Index;
import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                欢迎来到Route5
                <button onClick={this.pushRouter}>指定跳转/home</button>
            </div>
        );
    }

    pushRouter = () => {
        this.props.history.push("/home")
    }
}

export default withRouter(Header);
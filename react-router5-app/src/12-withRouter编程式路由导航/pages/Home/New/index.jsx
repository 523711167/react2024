import React from "react";
import {Link, Route} from "react-router-dom";
import Detail from "./Detail";

export default class New extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to={{ pathname: '/home/new/detail', state: { id : '1' }}}>啦啦啦</Link>
                        <button onClick={this.pushRoute}>PUSH</button>
                    </li>
                    <li>
                        <Link to={{ pathname: '/home/new/detail', state: { id : '2' }}}>啦啦啦</Link>
                    </li>
                    <li>
                        <Link to={{ pathname: '/home/new/detail', state: { id : '3' }}}>噜噜噜</Link>
                    </li>
                </ul>
                <div>
                    <Route path="/home/new/detail" component={Detail} />
                </div>
            </div>
        )
    }

    pushRoute = () => {
        // Hash history cannot push state; it is ignored
        this.props.history.push('/home/new/detail', { id : '1' })
    }
}
import React from "react";
import {Link, Route} from "react-router-dom";
import Detail from "./Detail";

export default class New extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <Link to={{ pathname: '/home/new/detail', state: { id : '1' }}}>啦啦啦</Link>
                    <Link to={{ pathname: '/home/new/detail', state: { id : '2' }}}>啦啦啦</Link>
                    <Link to={{ pathname: '/home/new/detail', state: { id : '3' }}}>噜噜噜</Link>
                </ul>
                <div>
                    <Route path="/home/new/detail" component={Detail} />
                </div>
            </div>
        )
    }
}
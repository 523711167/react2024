import React from "react";
import {Link, Route} from "react-router-dom";
import Detail from "./Detail";

export default class New extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <Link to={`/home/new/detail/1`}>啦啦啦</Link>
                    <Link to={`/home/new/detail/2`}>啦啦啦</Link>
                    <Link to={`/home/new/detail/3`}>噜噜噜</Link>
                </ul>
                <div>
                    <Route path="/home/new/detail/:id" component={Detail} />
                </div>
            </div>
        )
    }
}
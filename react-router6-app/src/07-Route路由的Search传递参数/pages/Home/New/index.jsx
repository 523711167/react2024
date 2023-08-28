import React from "react";
import { Link, Outlet } from "react-router-dom";

export default class New extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to={`detail?id=1`}>啦啦啦</Link>
                    </li>
                    <li>
                        <Link to={`detail?id=2`}>啦啦啦</Link>
                    </li>
                    <li>
                        <Link to={`detail?id=3`}>噜噜噜</Link>
                    </li>
                </ul>
                <div>
                    <Outlet/>
                </div>
            </div>
        )
    }
}
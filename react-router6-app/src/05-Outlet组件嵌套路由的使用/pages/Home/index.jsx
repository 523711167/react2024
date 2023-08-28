import React, {Component} from 'react';
import { NavLink, Outlet } from "react-router-dom";


class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavLink to="new">new</NavLink>
                    <NavLink to="todo">todo1</NavLink>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        );
    }
}

export default Home;
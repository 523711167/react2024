import React, {Component} from 'react';
import {NavLink, Redirect, Route, Switch} from "react-router-dom";


import New from "./New";
import Todo from "./Todo";

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <NavLink to="/home/new" >new</NavLink>
                        <NavLink to="/home/todo">todo1</NavLink>
                    </div>
                    <div>
                        <Switch>
                            <Route path="/home/new" component={New} />
                            <Route path="/home/todo" component={Todo}/>
                            <Redirect to="/home/new" />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
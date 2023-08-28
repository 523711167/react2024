import React from 'react';
import { NavLink, useRoutes } from "react-router-dom";

import Header from "../03-NavLink组件属性的改变/component/Header";

import routes  from './route'
import './index.css'

/**
 * useRoutes替换路由表
 * @Author pxx
 * @DATA 2023/8/28 16:12
 */
function Index() {

    let element = useRoutes(routes);

    let activeClass = ({ isActive, isPending }) => isActive ? 'active testClass' : 'testClass'

    return (
        <div className="container py-3" style={{ backgroundColor: '#EEE' }}>
            <div className="row my-2">
                <div className="col-12" style={{border: '1px solid red', backgroundColor: '#DFD'}}>
                    <Header/>
                </div>
            </div>
            <div className="row my-2" >
                <div className="col-3" style={{border: '1px solid red'}}>
                    <div className="d-flex flex-column">
                        <NavLink className={activeClass} to="/about" >About</NavLink>
                        <NavLink to="/home" >Home</NavLink>
                    </div>
                </div>
                <div className="col-9" style={{border: '1px solid red'}}>
                    <div className="tab-content">
                        { element }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;
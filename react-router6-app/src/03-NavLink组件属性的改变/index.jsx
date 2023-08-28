import React, {Component} from 'react';
import {Navigate, NavLink, Route, Routes} from "react-router-dom";


import Header from "./component/Header";
import About from "./pages/About";
import Home from "./pages/Home";

import './index.css'

/**
 * NavLink的classActiveName、to属性弃用
 * className传递函数
 * end属性
 * @Author pxx
 * @DATA 2023/8/28 15:27
 */
class Index extends Component {

    render() {
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
                            <NavLink className={this.activeClass} to="/about" >About</NavLink>
                            <NavLink to="/home" >Home</NavLink>
                        </div>
                    </div>
                    <div className="col-9" style={{border: '1px solid red'}}>
                        <div className="tab-content">
                            <Routes>
                                <Route path="/about" element={<About/>}/>
                                <Route path="/home" element={<Home/>}/>
                                <Route path="/" element={<Navigate to={'/about'}/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    activeClass = ({ isActive, isPending }) => isActive ? 'active testClass' : 'testClass'
}

export default Index;



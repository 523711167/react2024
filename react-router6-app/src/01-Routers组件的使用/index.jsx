import React, {Component} from 'react';
import {NavLink, Route, Routes} from "react-router-dom";


import Header from "./component/Header";
import About from "./pages/About";
import Home from "./pages/Home";

/**
 * Switch被Routers替换,同样也是匹配一次
 * Route组件component属性替换为element
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
                            <NavLink to="/about" >About</NavLink>
                            <NavLink to="/home" >Home</NavLink>
                        </div>
                    </div>
                    <div className="col-9" style={{border: '1px solid red'}}>
                        <div className="tab-content">
                            <Routes>
                                <Route path="/about" element={<About/>}/>
                                <Route path="/home" element={<Home/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;



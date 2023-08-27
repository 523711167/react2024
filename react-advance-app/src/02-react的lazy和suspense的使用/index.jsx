import React, {Component, lazy, Suspense} from 'react';
import { Link, Route} from "react-router-dom";


import Header from "./component/Header";
import Loading from "./component/Loading";
// 懒加载
const About = lazy(() => import('./pages/About') )
const Home = lazy(() => import('./pages/Home') )
/**
 * 18版本 fallback必须要使用<Loading/>
 * @Author pxx
 * @DATA 2023/8/25 17:15
 */
class Index extends Component {
    render() {
        return (
            <div className="container py-3" style={{backgroundColor: '#EEE'}}>
                <div className="row my-2">
                    <div className="col-12" style={{border: '1px solid red', backgroundColor: '#DFD'}}>
                        <Header/>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-3" style={{border: '1px solid red'}}>
                        <div className="d-flex flex-column">
                            <Link to="/about">About1</Link>
                            <Link to="/home">Home2</Link>
                        </div>
                    </div>

                    <div className="col-9" style={{border: '1px solid red'}}>
                        <div className="tab-content">
                            <Suspense fallback={<Loading/>}>
                                <Route path="/about" component={About}/>
                                <Route path="/home" component={Home}/>
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;



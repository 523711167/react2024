import {Link, NavLink, Redirect, Route, Switch} from "react-router-dom";


import './App.css'

import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./component/Header";



/**
 * 嵌套路由匹配的过程
 * /home/new
 * 1.拆分路由 home new，发现匹配路由Home
 * 2.Home组件挂载，注册嵌套路由，home new再进行一次匹配
 */
function App() {
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
                      <NavLink to="/about" children="About"/>
                      <NavLink to="/home" >Home</NavLink>
                  </div>
              </div>
              <div className="col-9" style={{border: '1px solid red'}}>
                  <div className="tab-content">
                      <Switch>
                          <Route path="/about" component={About}/>
                          <Route path="/home" component={Home}/>
                          <Redirect to="/about"/>
                      </Switch>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;

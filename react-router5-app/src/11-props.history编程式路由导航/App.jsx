import {Link, NavLink, Redirect, Route, Switch} from "react-router-dom";


import './App.css'

import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./component/Header";


/**
 * 通过使用路由组件this.props.histroy对象
 * push    压栈操作
 * replace 替换操作
 * Hash history cannot push state; it is ignored
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
                      <NavLink replace={true} to="/about" children="About"/>
                      <NavLink replace={true} to="/home" >Home</NavLink>
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

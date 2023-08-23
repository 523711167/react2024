import {Link, NavLink, Route, Switch} from "react-router-dom";


import './App.css'

import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./component/Header";
import Test from "./pages/Test";

/**
 * Switch组件路由匹配成功后停止继续匹配
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
                      {/*<NavLink activeClassName="pActive" to="/about" >About</NavLink>*/}
                      <NavLink to="/about" children="About"/>
                      <NavLink to="/home" >Home</NavLink>
                  </div>
              </div>
              <div className="col-9" style={{border: '1px solid red'}}>
                  <div className="tab-content">
                      <Switch>
                          <Route path="/about" component={About}/>
                          <Route path="/home" component={Home}/>
                          <Route path="/home" component={Test}/>
                      </Switch>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;

import {Link, NavLink, Route} from "react-router-dom";


import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./component/Header";

/**
 * HashRouter BrowserRouter组件包裹其他组件
 * Link组件路由连接
 * Route路由组件
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
                      <NavLink to="/about" >About</NavLink>
                      <NavLink to="/home" >Home</NavLink>
                  </div>
              </div>
              <div className="col-9" style={{border: '1px solid red'}}>
                  <div className="tab-content">
                      <Route path="/about" component={About}/>
                      <Route path="/home" component={Home}/>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;

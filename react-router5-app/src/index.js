import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from "react-router-dom";

// import App from './01-Link和Route和BrowerRouter使用/App'
// import App from './02-NavLink使用/App'
// import App from './03-Switch使用/App'
// import App from './04-路由的模糊匹配和精确匹配/App'
// import App from './05-Redirect组件使用/App'
// import App from './06-嵌套路由的匹配/App'
// import App from './07-Route路由的Params传递参数/App'
// import App from './08-Route路由的Search传递参数/App'
// import App from './09-Route路由的state传递参数/App'
// import App from './10-Link组件的replace和push模式/App'
// import App from './11-编程式路由导航/App'
import App from './12-withRouter编程式路由导航/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <App />
    </HashRouter>
);

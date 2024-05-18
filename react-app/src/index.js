import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './20-React类组件props变化生命周期函数/index'
// import App from './21-React类组件挂载新生命周期函数/index'
// import App from './22-React类组件setstate新生命周期函数/index'
// import App from './23-React类组件forceUpdate新生命周期函数/index'
// import App from './24-React类组件props变化新生命周期函数/index'
import App from './25-React函数组件Render测试/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <div id="app">
        <App/>
    </div>
    // </React.StrictMode>
);

export default root

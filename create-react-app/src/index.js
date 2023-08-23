import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//React.StrictMode React语法检查，比如字符串ref使用
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// package-lock.json和yarn.lock 包缓存文件,提高下载库速度,包含库下载地址，具体版本号
// setupTests.js用于做组件测试
// reportWebVitals(),用于做页面上的性能测试的

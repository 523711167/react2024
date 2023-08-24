import React from 'react';
import ReactDOM from 'react-dom/client';

import App from "./App";
// import store from "./01-单纯的Redux版本/redux/store";
// import store from "./02-单纯的Redux整合Action版本/redux/store";
// import store from "./03-单纯的Redux整合异步Action版本/redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

//react-redux版本之后就不需要这个监听
// store.subscribe(() => {
//     root.render(
//         <React.StrictMode>
//             <App />
//         </React.StrictMode>
//     );
// })

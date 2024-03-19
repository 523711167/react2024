import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
//V14之后的
// import './index.css'
// import Root, {
//     loader as rootLoader,
//     action as rootAction,
// } from "./14-V6的使用/routes/root";
// import ErrorPage from "./14-V6的使用/error-page";
// import Contact, {
//     loader as contactLoader,
//     action as contactAction,
// } from "./14-V6的使用/routes/contact";
// import EditContact, {
//     action as editAction,
// } from "./14-V6的使用/routes/edit";
// import {action as destroyAction} from "./14-V6的使用/routes/destory";
// import "./14-V6的使用/routes/index"
// import Index from "./14-V6的使用/routes";


const root = ReactDOM.createRoot(document.getElementById('root'));
//14之前
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>
);

// 14之后

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Root/>,
//         errorElement: <ErrorPage/>,
//         loader: rootLoader,
//         action: rootAction,
//         children: [
//             {
//                 errorElement: <div>Oops! There was an error.</div>,
//                 children: [
//                     {index: true, element: <Index/>},
//                     {
//                         path: "contacts/:contactId",
//                         element: <Contact/>,
//                         loader: contactLoader,
//                         action: contactAction,
//                     },
//                     {
//                         path: "contacts/:contactId/edit",
//                         element: <EditContact/>,
//                         loader: contactLoader,
//                         action: editAction,
//                     },
//                     {
//                         path: "contacts/:contactId/destroy",
//                         action: destroyAction,
//                         errorElement: <div>Oops! There was an error.</div>,
//                     },
//                 ]
//             }
//         ],
//     }
// ]);
//
// root.render(
//     <React.StrictMode>
//         <RouterProvider router={router}/>
//     </React.StrictMode>
// );
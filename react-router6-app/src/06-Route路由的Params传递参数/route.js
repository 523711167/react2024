import { Navigate } from "react-router-dom";
import React from "react";

import New from "./pages/Home/New";
import Todo from "./pages/Home/Todo";
import Home from "./pages/Home";
import About from "./pages/About";
import Index from "./pages/Index";
import Detail from "./pages/Home/New/Detail";

export default [
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/home',
        element: <Home/>,
        children: [
            {
                path: '',
                element: <Index/>
            },
            {
                path: 'new',
                element: <New/>,
                children: [
                    {
                        path: 'detail/:id',
                        element: <Detail/>
                    }
                ]
            },
            {
                path: 'todo',
                element: <Todo/>,
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to={'/about'}/>
    }
]
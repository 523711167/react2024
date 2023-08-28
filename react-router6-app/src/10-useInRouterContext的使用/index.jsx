import React from 'react';
import { useNavigationType } from 'react-router-dom'

/**
 * 用于判断组件是否在路由环境中
 * @Author pxx
 * @DATA 2023/8/28 18:30
 */
function Index() {
    let isInContext = useNavigationType();
    console.log('isInContext =', isInContext)
    return (
        <div>
            useInRouterContext的使用,用于判断组件是否在BrowserRouter的环境中
        </div>
    )
}

export default Index;
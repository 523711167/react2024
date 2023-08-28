import React from 'react';
import { useResolvedPath } from 'react-router-dom'

/**
 *
 * @Author pxx
 * @DATA 2023/8/28 18:46
 */
function Index() {

    let parsePath = useResolvedPath('https:www.baidu.com/pxx?search=pxx#123');
    console.log('parsePath =', parsePath)
    return (
        <div>
            useResolvedPath的作用是解析URL
        </div>
    )
}

export default Index;
import React, {useMemo} from 'react';

/**
 * memo 主要是用来缓存组件
 * useMemo 主要是用来缓存计算结果
 *      首次挂载, 执行useMemo入参纯函数,返回结果,并且缓存结果
 * useCallback 主要是允许你在多次渲染中缓存函数
 *      首次挂在, 把入参函数返回
 *
 *
 * useMemo 是一个 React Hook，它在每次重新渲染的时候能够缓存计算的结果。
 * 首先calculateValue可以返回任何类型,但是必须是纯函数
 * @Author pxx
 * @DATA 2023/11/25 15:06
 */
function Index() {

    const visibleTodos = useMemo(
        () =>
        []
    );

    return (
        <div>

        </div>
    )
}

export default Index;
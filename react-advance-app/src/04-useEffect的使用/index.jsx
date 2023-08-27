import React from 'react';


import root from '../index'

/**
 * React.useEffect(() => {}) 相当于didMount 和 didUpdate
 * React.useEffect(() => {}, []) 相当于didMount
 * React.useEffect(() => {}, [count]) 相当于didUpdate，监听指定参数的变化
 * React.useEffect(() => {
 *         return () => {
 *             console.log('@@', '@@')
 *         }
 *     }, [])   //相当于WillUnmount
 *
 * notes setCount返回的值不发生变化，React.useEffect不会执行
 * @Author pxx
 * @DATA 2023/8/27 15:07
 */
function Index() {

    const [count, setCount] = React.useState(0);
    const [username, setUsername] = React.useState("pxx");

    let add = () => {
        setCount((preCount) => {
            return preCount + 1
        })
    }

    let unMount = () => {
        root.unmount()
    }

    let modifyUsername = () => {
        setUsername(preUsername => {
            return "彭小曦"
        })
    }

    return (
        <div>
            当前值是{count},我叫{username}
            <button onClick={add} >+1</button>
            <button onClick={unMount} >卸载组件</button>
            <button onClick={modifyUsername} >我要改名</button>
        </div>
    )
}

export default Index;
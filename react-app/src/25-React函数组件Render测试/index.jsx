import {Fragment, useState} from "react";

/**
 * 1. 父组件setState,子组件会不会执行render
 *  1.1 子组件任何属性不依赖父组件
 *  1.2 子组件接受父组件的props
 *      只要父组件的setState发生改变,所有子组件都会执行Render,如果没有则不会执行
 * @constructor
 */
function App() {

    const [num, setNum] = useState(0)

    return (
        <Fragment>
            {num}
            <button onClick={() => setNum(state => state + 1)}>++++</button>
            <button onClick={() => setNum(state => state)}>++</button>
            <Parent/>
        </Fragment>
    )
}

function Parent() {
    console.log('Parent');
    return (
        <Fragment>
            <Son/>
            <BiologicalSon/>
        </Fragment>
    )
}

function Son() {
    console.log('Son');
    return (
        <h1>Son</h1>
    )
}

function BiologicalSon(props) {
    console.log('BiologicalSon');
    return (
        <h1>BiologicalSon = {props.num}</h1>
    )
}

export default App
import {Fragment, useState} from "react";

/**
 * 1. 父组件setState,子组件会不会执行render?
 *  1.1 子组件任何属性不依赖父组件
 *  1.2 子组件接受父组件的props
 *      只要父组件的setState发生改变,所有子组件都会执行Render,
 *      发现memo组件可以避免render的执行,如何props不发生改变的情况
 *      祖父组件不会render
 * @constructor
 */
function App() {

    return (
        <Fragment>
            <GrandFather/>
        </Fragment>
    )
}

function GrandFather() {
    console.log('GrandFather');
    return (
        <Parent/>
    )
}

function Parent() {

    const [num, setNum] = useState(0)
    console.log('Parent');
    return (
        <Fragment>
            {num}
            <button onClick={() => setNum(state => state + 1)}>++++</button>
            <button onClick={() => setNum(state => state)}>++</button>
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
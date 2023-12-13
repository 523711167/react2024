import React from 'react';

/**
 * useRef的使用
 * @Author pxx
 * @DATA 2023/8/27 21:08
 */
function Index() {

    let inputContainer = React.useRef();

    let show = () => {
        alert(inputContainer.current.value)
    }

    return (
        <div>
            {/* 第一种 直接赋值*/}
            {/*<input type="text" ref={inputContainer}/>*/}
            {/* 第二种 回调函数*/}
            {/* ref属性不能用在组件上，可以使用forwardRef*/}
            <input type="text" ref={ node => inputContainer.current = node}/>
            <button onClick={show}>显示数据</button>
        </div>
    )
}

export default Index;
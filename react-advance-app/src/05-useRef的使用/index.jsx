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
            <input type="text" ref={inputContainer}/>
            <button onClick={show}>显示数据</button>
        </div>
    )
}

export default Index;
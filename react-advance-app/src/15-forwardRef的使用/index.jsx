import React, {forwardRef, useRef} from 'react';

/**
 *
 * @Author pxx
 * @DATA 2023/12/13 16:46
 */
// 转发组件的ref
const MyInput = forwardRef((props, ref) => {
    return <input {...props} ref={ref} />;
});

function Index() {

    //父节点可以获取子节点的ref
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }

    return (
        <>
            <MyInput ref={inputRef} />
            <button onClick={handleClick}>
                聚焦输入框
            </button>
        </>
    )
}

export default Index;
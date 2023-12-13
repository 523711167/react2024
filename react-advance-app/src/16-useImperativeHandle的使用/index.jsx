import React, {forwardRef, useImperativeHandle, useRef} from 'react';

/**
 *
 * @Author pxx
 * @DATA 2023/12/13 16:49
 */
const MyInput = forwardRef((props, ref) => {
    const realInputRef = useRef(null);
    // 不想把组件的DOM元素暴露给父组件，使用useImperativeHandle暴露部分属性
    useImperativeHandle(ref, () => ({
        // 只暴露 focus，没有别的
        focus() {
            realInputRef.current.focus();
        },
    }));
    return <input {...props} ref={realInputRef} />;
});

function Index() {

    const inputRef = useRef(null);

    function handleClick() {
        console.log('inputRef =', inputRef)
        inputRef.current.focus();
    }

    return (
        <>
            <MyInput ref={inputRef} />
            <button onClick={handleClick}>
                聚焦输入框
            </button>
        </>
    );
}

export default Index;
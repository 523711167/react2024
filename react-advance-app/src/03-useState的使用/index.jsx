import React from 'react';


/**
 * setCount可以传递两种参数
 * @Author pxx
 * @DATA 2023/8/27 14:15
 */
export default function Index() {

    const [count, setCount] = React.useState(0);

    let add = () => {
        //第一
        // setCount(count + 1)
        //请注意
        //setCount((preCount) => preCount + 1 ) 这种用法会将preCount + 1返回，但是如果想返回对象必须用()包裹
        //第二
        setCount( preCount => preCount + 1)
    }

    return (
        <div>
            当前值为{count}
            <button onClick={add}>+1</button>
        </div>
    )
}
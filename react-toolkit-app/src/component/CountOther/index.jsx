import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {add, sub, subadd} from "../../redux/slice/countother";

/**
 *
 * @Author pxx
 * @DATA 2023/12/12 11:17
 */
function Index() {
    //用于从store中获取值
    let count = useSelector(state => state.countOther?.count);
    const dispatch = useDispatch();

    function add1() {
        console.log('add =', add)
        dispatch(add(1))
    }

    function sub4() {
        dispatch(sub(1))
    }

    function multipleAdd() {
        dispatch(subadd(2))
    }

    return (<div>
            <h3>这个是属于create.reducer写法,是2版本的骚东西</h3>
            当前的值为{count}
            <br/>
            <button onClick={add1}>+1</button>
            <button onClick={sub4}>-1</button>
            <button onClick={multipleAdd}>先加1，2秒后再减2</button>
        </div>)
}

export default Index;
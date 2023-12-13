import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {countAdd, countMutilple, countSub} from "../../redux/slice/count";

/**
 *
 * @Author pxx
 * @DATA 2023/8/29 18:15
 */
function Count() {
    //用于从store中获取值
    let count = useSelector(state => state.counts.count);
    const dispatch = useDispatch();

    let add1 = () => {
        dispatch(countAdd(1))
    }

    let add2 = () => {
        dispatch(countAdd(2))
    }

    let sub3 = () => {
        dispatch(countSub(3))
    }

    let sub4 = () => {
        dispatch(countSub(1))
    }

    let multipleAdd = () => {
        dispatch(countMutilple(1,2))
    }

    return (
        <div>
            当前的值为{count}
            <br/>
            <button onClick={add1}>+1并且countOther会清0</button>
            <button onClick={add2}>+2</button>
            <button onClick={sub3}>-3</button>
            <button onClick={sub4}>-1</button>
            <button onClick={multipleAdd}>先加1再减2</button>

        </div>
    )
}

export default Count;


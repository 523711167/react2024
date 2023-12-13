import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment} from "../../redux/reducer/calculate";

/**
 *
 * @Author pxx
 * @DATA 2023/12/11 20:32
 */
function Index() {
    let count = useSelector(state => state.calculate);
    const dispatch = useDispatch();

    return (
        <div>
            当前的值为{count}
            <button onClick={() => {
                dispatch(increment())
            }}>我是触发的按钮</button>
        </div>
    )
}

export default Index;
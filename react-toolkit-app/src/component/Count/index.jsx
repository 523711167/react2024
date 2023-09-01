import React from 'react';
import {connect, useSelector} from "react-redux";
import {countAdd, countMutilple, countSub} from "../../redux/reducer/count";

/**
 *
 * @Author pxx
 * @DATA 2023/8/29 18:15
 */
function CountUI() {
    let countAdd = useSelector(state => state.countAdd);
    let countSub = useSelector(state => state.countSub);
    let countMutilple = useSelector(state => state.countMutilple);
    let count = useSelector(state => state.count);

    let add1 = () => {
        countAdd(1)
    }

    let add2 = () => {
        countAdd(2)
    }

    let sub3 = () => {
        countSub(3)
    }

    let sub4 = () => {
        countSub(1)
    }

    let multipleAdd = () => {
        countMutilple(1,2)
    }

    return (
        <div>
            当前的值为{count}
            <br/>
            <button onClick={add1}>+1</button>
            <button onClick={add2}>+2</button>
            <button onClick={sub3}>-3</button>
            <button onClick={sub4}>-1</button>
            <button onClick={multipleAdd}>先加1再减2</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        count: state.counts.count
    }
}

const mapDispatchToProps = {
    countAdd,
    countSub,
    countMutilple
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI);


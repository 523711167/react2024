import React, {useEffect, useState} from 'react';

/**
 *
 * @Author pxx
 * @DATA 2024/3/26 23:22
 */

function Index() {

    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)
    useEffect(() => {
        console.log('父亲执行')
        return () => {
            console.log('父亲执行销毁')
        }
    }, [count])


    return (
        <div>
            {count}
            <Son count={count}/>
            <Son count={number}/>
            <button onClick={() => setCount(preCount => preCount + 1)}>+1</button>
            <button onClick={() => setNumber(preCount => preCount + 1)}>+1 number</button>
        </div>
    )
}

const Son = (props) => {

    useEffect(() => {
        console.log("儿子执行")
        return () => {
            console.log('儿子执行销毁')
        }
    });

    return <div>
        {/*{props.count}*/}
    </div>

}

export default Index;
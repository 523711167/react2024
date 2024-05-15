import React, {useEffect, useState} from 'react';

/**
 *
 * @Author pxx
 * @DATA 2024/3/26 23:22
 */

function Index() {

    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('父亲执行')
    })


    return (
        <div>
            {count}
            <Son count={count}/>
            <button onClick={() => setCount(preCount => preCount + 1)}>+1</button>
        </div>
    )
}

const Son = (props) => {

    useEffect(() => {
        console.log("儿子执行")
    });

    return <div>
        {/*{props.count}*/}
    </div>

}

export default Index;
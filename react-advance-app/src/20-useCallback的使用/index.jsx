import React, {memo, useCallback, useMemo} from 'react';

/**
 * useCallback 用来memo一个函数，使用useMemo也是可以的，但是会导致嵌套函数
 * @Author pxx
 * @DATA 2024/3/19 20:08
 */

function Index({ productId, referrer }) {
    // const handleSubmit = orderDetails => {
        // todo something
    // }

    // 必须使用
    // 缓存计算值的函数。它应该是一个没有任何参数的纯函数，并且可以返回任意类型。
    // const handleSubmit = useMemo(() => {
    //     return orderDetails => {
            // todo something
            // 使用了 productId, referrer
        // }
    // }, [productId, referrer]);

    //简化后
    const handlerSubmit = useCallback(orderDetails => {
        // todo something
        // 使用了 productId, referrer
    }, [productId, referrer]);

    return (
        <div>
            <Form handleSubmit={handlerSubmit}/>
        </div>
    )
}


const Form = memo(function Form() {
    return (
        <div>

        </div>
    )
})

export default Index;
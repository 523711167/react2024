import {createAction, createReducer} from '@reduxjs/toolkit'

// export const increment = createAction('increment')
export const increment = createAction('increment', () => {
    //看文档说明返回的action 有mete和error属性但是我没有找到
    return {
        payload: {
            data: 1,
            createdAt: new Date().toISOString(),
        }
    }
})

/**
 * 1.可以匹配多个，先匹配case、matcher、以上匹配不成功再匹配defualt
 * 2.Matcher按照顺序匹配执行，并且经过计算state值向下传递
 * 3.createAction两种写法
 */
const reducer = createReducer(0, (builder) => {
    builder
        .addCase(increment, (state, action) => {
            return state + 1
        })
        .addMatcher(
            (action) => action.type.startsWith('i'),
            (state) => state * 5
        )
        .addMatcher(
            (action) => action.type.endsWith('t'),
            (state) => state + 2
        )
})


export default reducer

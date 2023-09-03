import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 2
}

const countSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        countAdd(state, action) {
            let { type, payload } = action;
            state.count = state.count + payload
        },
        countSub(state, action) {
            let { type, payload } = action;
            return {
                count: state.count - payload
            }
        },
        countMutilple: {
            reducer(state, action) {
                let { type, payload: { add, sub } } = action;
                state.count = state.count + add - sub
            },
            prepare(add, sub) {
                return {
                    payload: { add, sub }
                }
            }
        }
    }
})

export const { countAdd, countSub, countMutilple } = countSlice.actions

export default countSlice.reducer
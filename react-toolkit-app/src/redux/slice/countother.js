import {asyncThunkCreator, buildCreateSlice, current} from '@reduxjs/toolkit'
import {countAdd} from "./count";

const initialState = {
    count: 2
}

const createSliceWithThunks = buildCreateSlice({
    creators: {asyncThunk: asyncThunkCreator},
})

function isRejectedAction(action) {
    return action.type.endsWith('rejected')
}

const countOtherSlice = createSliceWithThunks({
    name: 'countOther',
    initialState,
    reducers: (create) => ({
        add: create.reducer((preState, action) => {
            preState.count = preState.count + action.payload
        }),
        sub: create.preparedReducer(
            data => {
                return {
                    payload: data
                }
            },
            (preState, action) => {
                preState.count = preState.count - action.payload
            }),
        subadd: create.asyncThunk(async (data, thunkApi) => {
            let result = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(data)
                }, 2000)
            })
            return result;
        }, {
            pending: (preState, action) => {
                console.log('pending preState =', current(preState))
                console.log('pending action =', action)
                preState.count = preState.count + 1
            },
            rejected: (preState, action) => {
                console.log('rejected preState =', current(preState))
                console.log('rejected pending =', action)
            },
            fulfilled: (preState, action) => {
                console.log('fulfilled preState =', current(preState))
                console.log('fulfilled pending =', action)
                preState.count = preState.count - action.payload
            },
            settled: (preState, action) => {
                console.log('settled preState =', current(preState))
                console.log('settled pending =', action)
            },
            options: {}
        })
    }),
    extraReducers: (builder) => {
        //优先匹配reducer，
        builder.addCase(countAdd, (state, action) => {
            state.count = 0
        })
        builder.addMatcher(isRejectedAction, (state, action) => {})
        //以上不匹配，则匹配默认的
        builder.addDefaultCase((state, action) => {})
    }
})


export const {add, sub, subadd} = countOtherSlice.actions

export default countOtherSlice.reducer

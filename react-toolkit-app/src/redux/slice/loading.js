import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    count: 0
}

export const fetchLoading = createAsyncThunk('donghua/fetchLoading', async data => {
    let count = await new Promise(resolve => setTimeout(() => resolve(data), 2000))
    console.log('count =', count)
    return {
        count: count
    }
})

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchLoading.fulfilled, ( preState, action ) => {
                console.log('action =', action)
                let { type, payload } = action;
                preState.count = payload.count
            })
            .addCase(fetchLoading.pending, ( preState, action ) => {
                console.log('preState.count =', preState.count)
                preState.count = 999
            })
    }
})

export default loadingSlice.reducer
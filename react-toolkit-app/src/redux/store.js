import { configureStore } from '@reduxjs/toolkit'

import countSlice from './slice/count'
import loadingSlice from './slice/loading'
import countOtherSlice from './slice/countother'
import calculateReducer from './reducer/calculate'

const store = configureStore({
    reducer: {
        counts: countSlice,
        loadings: loadingSlice,
        calculate: calculateReducer,
        countOther: countOtherSlice
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store
import { configureStore } from '@reduxjs/toolkit'

import countReducer from './reducer/count'
import loadingReducer from './reducer/loading'

const store = configureStore({
    reducer: {
        counts: countReducer,
        loadings: loadingReducer
    }
})

export default store
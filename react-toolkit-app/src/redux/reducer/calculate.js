import { createReducer } from '@reduxjs/toolkit'

const reducer = createReducer(0, (builder) => {
    builder
        .addCase('increment', (state) => state + 1)
        .addMatcher(
            (action) => action.type.startsWith('i'),
            (state) => state * 5
        )
        .addMatcher(
            (action) => action.type.endsWith('t'),
            (state) => state + 2
        )
})

console.log(reducer(0, { type: 'increment' }))
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arr: []
}

export const prodSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        AddData: (state, action) => {
            console.log(state.arr)
            state.arr = [...state.arr, action.payload]
            console.log(state.arr)
        }
    },
})
export const { AddData } = prodSlice.actions

export default prodSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  app: []
}

export const FavSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = FavSlice.actions

export default FavSlice.reducer
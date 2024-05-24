import { configureStore } from '@reduxjs/toolkit'
import { FavSlice } from './slices/FavSlices'
import { prodSlice } from './slices/productSlice'

export const store = configureStore({
    reducer: {
        product:prodSlice,
        fav: FavSlice
    },
})
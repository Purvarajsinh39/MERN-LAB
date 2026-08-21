import {configureStore} from '@reduxjs/toolkit'
import monyslice from './slicer'

export const store = configureStore({
    reducer: {
        money: monyslice
    }
})
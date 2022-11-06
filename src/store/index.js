import { configureStore } from "@reduxjs/toolkit";
import termSlice from "./slice/term.slice";
import isLoading from './slice/isLoading.slice'

export default configureStore( {
    reducer:{
        termSlice,
        isLoading
    }
})
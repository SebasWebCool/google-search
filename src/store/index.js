import { configureStore } from "@reduxjs/toolkit";
import termSlice from "./slice/term.slice";
import Isfinished from './slice/isFinished.slice'

export default configureStore( {
    reducer:{
        termSlice,
        Isfinished
    }
})
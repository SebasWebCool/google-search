import { createSlice } from "@reduxjs/toolkit";

const Isfinished = createSlice({
    name:'Isfinished',
    initialState:0,
    reducers:{
        setFTrue: (state) => state + 1,
        setFFalse: (state) => state - 1
    }
})

export default Isfinished.reducer

export const {setFFalse,setFTrue} = Isfinished.actions

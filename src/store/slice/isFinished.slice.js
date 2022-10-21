import { createSlice } from "@reduxjs/toolkit";

const Isfinished = createSlice({
    name:'Isfinished',
    initialState:false,
    reducers:{
        setFTrue: (state) => state = true,
        setFFalse: (state) => state = false
    }
})

export default Isfinished.reducer

export const {setFFalse,setFTrue} = Isfinished.actions

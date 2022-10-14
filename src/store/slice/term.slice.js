import { createSlice } from "@reduxjs/toolkit";

const termSlice = createSlice({
    name:`termSlice`,
    initialState:'',
    reducers:{
        setTerm: (state,action) =>action.payload,
        setInitialState:(state) => state = initialState
    }
})

export const { setTerm } = termSlice.actions

export default termSlice.reducer
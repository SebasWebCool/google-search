import { createSlice } from "@reduxjs/toolkit";

const isLoading = createSlice({
    name:'isLoading',
    initialState:false,
    reducers:{
        setLoadingTrue: (state) => state = true,
        setLoadingFalse: (state) => state = false
    }
})


export default isLoading.reducer
export const {setLoadingFalse, setLoadingTrue} = isLoading.actions
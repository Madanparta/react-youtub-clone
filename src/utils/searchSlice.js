import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState:{},
    reducers:{
        cachingSearch : (state,action)=>{
            state = Object.assign(state,action.payload)
        }
    }
});

export const {cachingSearch} = searchSlice.actions;
export default searchSlice.reducer;
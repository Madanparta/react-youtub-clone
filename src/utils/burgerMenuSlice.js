import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name:"menu",
    initialState:{
        isMenu:true
    },
    reducers:{
        toggle:(state)=>{
            state.isMenu = !state.isMenu;
        },
        colaps:(state)=>{
            state.isMenu = false;
        }
    }
})

export const {toggle,colaps} = menuSlice.actions;
export default menuSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHARTC_OFF_SET } from "./constant";

const liveSlice = createSlice({
    name:"chart",
    initialState:{
        message:[],
    },
    reducers:{
        addMessage:(state,action)=>{
            state.message.push(action.payload);
            if(state.message.length>LIVE_CHARTC_OFF_SET){
                state.message.shift()
            }
            
        }
    }
});

export const {addMessage} = liveSlice.actions;
export default liveSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import isMenu from "./burgerMenuSlice"
import searchSlice from "./searchSlice";
import liveSlice from "./liveSlice";

const store = configureStore({
    reducer:{
        app : isMenu,
        search : searchSlice,
        chart : liveSlice,
    }
});

export default store;
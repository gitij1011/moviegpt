import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from"./movieSlice"
import gptReducer from "./gptSlice"
import langReducer from "./configSlice"
const appstore=configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer,
        gpt:gptReducer,
        lang:langReducer,
    }
})

export default appstore;
import { createSlice } from "@reduxjs/toolkit";

const config=createSlice({
    name:"lang",
    initialState:{
        showLang:"en"
    },
    reducers:{
        changeLang:(state,action)=>{
           state.showLang=action.payload;
        }
    }
})
export default config.reducer;
export const{changeLang}=config.actions;
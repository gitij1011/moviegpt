import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gptslice",
    initialState:{
        showgptsearch:false,
        movieNames:null,
        movieResults:null,
    },
    reducers:{
        updategptsearch:(state)=>{
         state.showgptsearch=!state.showgptsearch;
        },
        addGptMovies:(state,action)=>{
           const{movieNames,movieResults}=action.payload
           state.movieNames=movieNames;
           state.movieResults=movieResults
        }
    }
})

export const{updategptsearch,addGptMovies}=gptSlice.actions;
export default gptSlice.reducer;
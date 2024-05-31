import { createSlice } from "@reduxjs/toolkit";
//creating a movie slice in redux store for storing the data of movies
// creating a reducer for storing the trailer also
const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlaying:null,
        trailerVideo:null,
        popularPlaying:null,
    },
    reducers:{
     addMovies:(state,action)=>{
       state.nowPlaying=action.payload;
     },
     addTrailer:(state,action)=>{
      state.trailerVideo=action.payload;
     },
     addPopular:(state,action)=>{
      state.popularPlaying=action.payload
     }
    }
})
export const{addMovies,addTrailer,addPopular}=movieSlice.actions;
export default movieSlice.reducer;

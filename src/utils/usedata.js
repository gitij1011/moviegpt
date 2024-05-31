import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "./movieSlice";
import {API_OPTIONS} from "./constants"

const useData = () => {
    //  dispatching an action to write data in redux store
    const nowPlaying=useSelector((store)=>store.movie.nowPlaying)
    const dispatch=useDispatch();
     // making an api call to tmdb moviedatabase
     const movieDataLoading=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS)
        const jsonData=await data.json();
        console.log(jsonData.results)
        dispatch(addMovies(jsonData.results))
      }
    //   calling method inside use effect
      useEffect(()=>{
      if(!nowPlaying)
        movieDataLoading();
      },[])
}

export default useData;
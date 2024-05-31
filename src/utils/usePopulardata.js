import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "./constants";
import { addPopular } from "./movieSlice";

const usePopulardata=()=>{
 //  dispatching an action to write data in redux store
 const popularmovies=useSelector((store)=>store.movie.popularPlaying)
 const dispatch=useDispatch();
 // making an api call to tmdb moviedatabase
 const movieDataLoading=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/popular',API_OPTIONS)
    const jsonData=await data.json();
    dispatch(addPopular(jsonData.results))
  }
//   calling method inside use effect
  useEffect(()=>{
   if(!popularmovies) 
     movieDataLoading();
  },[])
}
export default usePopulardata
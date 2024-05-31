import { useEffect } from "react"
import { API_OPTIONS } from "./constants"
import { useDispatch, useSelector } from "react-redux"
import { addTrailer } from "./movieSlice";

const useVideoData=(movieid)=>{
  const trailer=useSelector((store)=>store.movie.trailerVideo)
  // dispatching an action
  const dispatch=useDispatch();
    //   fetching the video data for getting the youtube key
  const getVideoData=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/'+
    movieid+'/videos', API_OPTIONS)
    const jsonData=await data.json()
    console.log(jsonData)
    const filterData=jsonData.results.filter((val)=>val.type==="Trailer")
    const trailer=filterData.length?filterData[0]:jsonData.results[0]
    console.log(trailer)
    dispatch(addTrailer(trailer))
   }
   useEffect(()=>{
   if(!trailer)
     getVideoData()
   },[])
 
}

export default useVideoData;
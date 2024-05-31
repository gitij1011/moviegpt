import { useSelector } from "react-redux"
import useVideoData from "../utils/usevideodata"

const Videopart = (props) => {
   const trailer=useSelector((store)=>store.movie?.trailerVideo)
    const{movieid}=props
   useVideoData(movieid)
//   we will add trailer data to the store to acess it everywhere
  return (
    <div className="w-screen">
    {/* embedding the video using ifram tag */}
    {/* add &autoplay=1&mute=1 to autoplay video in src */}
     <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+trailer?.key+"?&autoplay=1&mute=1"} 
     title="YouTube video player"
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default Videopart
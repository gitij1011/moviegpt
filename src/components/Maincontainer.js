import { useSelector } from "react-redux";
import Videopart from "./Videopart"
import Videotext from "./Videotext"

const Maincontainer = () => {
  const movie=useSelector((store)=>store.movie?.nowPlaying)
    // because initially the value of nowplaying is null
    if(movie===null) return;
    const{title,overview,id}=movie[0];
  return (
  <div>
   <Videotext movietitle={title} desc={overview}/>
   <Videopart movieid={id}/>
   </div>
  )
}

export default Maincontainer
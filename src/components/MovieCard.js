import { IMAGEURL } from "../utils/constants";
const MovieCard=({path})=>{
  if(!path) return null;
  return(
    <div className="w-36 pr-4">
        <img src={IMAGEURL+path} alt="cardimg"/>
    </div>
  )
}

export default MovieCard;
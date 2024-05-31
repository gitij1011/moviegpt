import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const Secondrycontainer = () => {
  const movies=useSelector((store)=>store.movie)
  return (
   movies.nowPlaying&&( <div className="bg-black">
    <div className="-mt-32 relative z-10">
      <MovieList title={"Now Playing"} movie={movies.nowPlaying}/>
      <MovieList title={"Trending"} movie={movies.popularPlaying}/>
      <MovieList title={"Romance"} movie={movies.nowPlaying}/>
      <MovieList title={"Comedy"} movie={movies.nowPlaying}/>
    </div>
    </div>
  )
)
}

export default Secondrycontainer
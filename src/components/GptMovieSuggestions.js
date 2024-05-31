import { useSelector } from "react-redux"
import MovieList from "./MovieList"
const GptMovieSuggestions = () => {
  const gpt=useSelector((store)=>store.gpt)
  const {movieResults,movieNames}=gpt;
  // movie names is the title of the movies and movie results is the array of arrays it basically 
  // contains all the arrays of the movies for which we made the api call
  // here we are reusing the component movie list and passing the props title and movieresults in it
  if(!movieNames)return null;
  return (
    <div className="bg-black bg-opacity-80 p-4 mt-4 w-screen">
        {
          movieNames.map((value,index)=>(
          <MovieList key={value} title={value} movie={movieResults[index]}/>
          ))
        }
    </div>
  )
}

export default GptMovieSuggestions
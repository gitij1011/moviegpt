import { useDispatch, useSelector } from "react-redux"
import lang from"../utils/langconstants"
import { useRef } from "react"
import { genAI } from "../utils/geminiai"
import { API_OPTIONS } from "../utils/constants"
import { addGptMovies } from "../utils/gptSlice"
const GptSearchBar = () => {
  const langkey=useSelector((store)=>store.lang.showLang)
 const searchtext=useRef(null)
 const dispatch=useDispatch()
//  making api call to tmdb database from search 
 const getMovieData=async(moviename)=>{
    const SearchData=await fetch('https://api.themoviedb.org/3/search/movie?query='+moviename+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const json=await SearchData.json()

    return json.results;
 }
  const handleGptClick=async()=>{
    console.log(searchtext.current.value)
    // giving a proper instruction query to gemini api
    


  const searchQuery = "act as a movie recommendation system and suggest movies :"+searchtext.current.value+" . suggest only 5 movies names comma separated similar to the examples given here example :Golmal, Dhamal,Welcome,Ready"

  const model = genAI.getGenerativeModel({ model:"gemini-pro"});

  const result = await model.generateContent(searchQuery);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  const gptMovies=text.split(",")
  // calling the function to fetch data
  const gptArray=gptMovies.map((value)=>getMovieData(value))
  // this will return promises which need to be resolved to get the values
  const tmdbResults=await Promise.all(gptArray)
  console.log(tmdbResults)
  dispatch(addGptMovies({movieNames:gptMovies,movieResults:tmdbResults}))
  }
  return (
    <div className="pt-[10%] flex justify-center">
            <form onSubmit={(e)=>e.preventDefault()} className="justify-center bg-black w-1/2 grid grid-cols-12">
             <input type="text" placeholder={lang[langkey].placeholdertext} className="px-4 py-4 m-4 col-span-9"/>
             <button className="bg-red-700 text-white col-span-3 px-4 py-2 m-2"ref={searchtext} onClick={handleGptClick}>{lang[langkey].search}</button>
            </form>
    </div>
  )
}

export default GptSearchBar
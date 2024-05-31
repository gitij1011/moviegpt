import MovieCard from "./MovieCard";

const MovieList=(props)=>{
  const{title,movie}=props;
  return(
 <div>
 <h1>{title}</h1>
 {/* overflow x-scroll allows scrolling when elements overflow after a certain point*/}
  <div className="flex overflow-x-scroll scrollbar-hide mb-8">
   <div className="flex">    
    {
        movie?.map((value,index)=>
           ( <MovieCard key={value.id} path={value.poster_path}/>
            ) )
    }
   </div> 
   </div>
 </div>
  )

}

export default MovieList;
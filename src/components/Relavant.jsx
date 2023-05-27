import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";


const Relevant = ({genre}) => {
    let [movies,setMovies]=useState(null);
useEffect(()=>{
    fetch("http://localhost:4000/movies")
    .then((res)=>{return res.json()})
    .then((data)=>{setMovies(data)})
},[])
    
    return ( 
        <div className="relevant-movie">
      <h1>{genre}</h1>
            {movies && <MoviesList 
            movies={movies.filter((m)=>{ 
                return genre.split(" ").some((g)=>{
                 return  m.genre.includes(g)})})}
                 title="Relevant Movies"/>}
        </div>
     );
}
 
export default Relevant;
import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";

const Home=()=>{
    let [movies,setMovies]=useState(null);
    let [error,setError]=useState(null);
    let[pending,setPending]=useState(true);

    useEffect(()=>{
        if(localStorage.getItem("fav")==null){
            localStorage.setItem("fav","[]")
        }
        
        setTimeout(()=>{
            fetch("http://localhost:4000/movies")
        .then((res)=>{return res.json()})
        .then((data)=>{
            console.log(data);
            setMovies(data);
            setPending(false);
        })
        .catch((err)=>{
            setError("404 Network issue!!!!!");
            setPending(false);
        })
        },2000)
    },[])
    return(
        <div className="home">
            {pending==true && <h1 className="loading">Loading......</h1>}
            {error && <h1>{error}</h1>}

            {/* {movies==null && <h1>Loading.....</h1>} */}
          {movies && <>
<MoviesList movies={movies} title="All Movies"/>

<MoviesList movies={movies.filter((m)=>{return m.hero.includes("Darshan")})} title="FAV HERO"/>

<MoviesList movies={movies.filter((m)=>{return m.heroine.includes("sapthami gowda")})} title=" HEROINE"/>
<MoviesList movies={movies.filter((m)=>{return m.genre.includes("romance")})} title="romance movie"/>
<MoviesList movies={movies} title="Top rated Movies"/>
</>
}
 </div> 
    );
}
export default Home;
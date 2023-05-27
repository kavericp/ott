import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Relevant from "./Relavant";



const Moviedetails = () => {
    let {id}=useParams();
    let navigate=useNavigate();
    let[movie,setMovie]=useState(null);
    let[error,setError]=useState(null);
    let[pending,setPending]=useState(true);

    let [displayEditbox,setdisplayEditbox]=useState(false);

    useEffect(()=>{
        setMovie(null);
        setPending(true);
        setTimeout(()=>{
            fetch("http://localhost:4000/movies/"+id)
        .then((res)=>{return res.json()})
        .then((data)=>{
            console.log(data);
            setMovie(data);
            setPending(false);
        })
        .catch((err)=>{
            setError("404 Network issue!!!!!");
            setPending(false);
        })
        },2000)
    },[id])

    let deletemovie=()=>{
        fetch("http://localhost:4000/movies/"+id,{method:"DELETE"})
        .then(()=>{navigate("/")})
    }
    
    return ( <div>
{/* <h1>Movie details component</h1> */}
{pending==true && <div className="loading">Loding</div>}
            {error && <h1>{error}</h1>}
            {movie && <div className="movie-details">
                <h1>Watch complete movie</h1>
            <img src={movie.poster} alt="poster" width="300px" height="240px"/>
                <h1>Movie:{movie.moviename}</h1>
                <h3>Actor:{movie.hero} </h3>
                <h4>Heroine:{movie.heroine}</h4>
                <p>Director:{movie.director}</p>
                <p>Language:{movie.languages.join("**")}</p>
                <p>genre:{movie.genre}</p>
                <h3>story line:</h3>
                <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                
  <button onClick={deletemovie}>delete</button>
  <Link to={`/edit/${movie.id}`}> <button>Update</button> </Link>
  </div>}
  {movie && <Relevant genre={movie.genre}/>}
    </div> );
}
 
export default Moviedetails;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
    let[searchword,setSearchword]=useState("");
    let[movienames,setMovienames]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:4000/movies")
        .then((res)=>{return res.json()})
        .then((data)=>{
            let names=data.map((m)=>{return {moviename:m.moviename,id:m.id}})
            let filterdNames=names.filter((movie)=>{return movie.moviename.toLowerCase().includes(searchword.toLowerCase())})
            setMovienames(filterdNames);
        })
    },[searchword])
    
    return(
        <nav>
            <div id="logo">
               <Link to="/"> <h1>Movies📼 </h1></Link>


            </div>
            <div id="search-bar">
                <input type="search" placeholder="search for movies" value={searchword}
                onChange={(e)=>{setSearchword(e.target.value);
                }}
                />
             <Link to={`/search/${searchword}`}> 
              <button>search</button> </Link>
            </div>
            

            <div id="fav">
                <Link to="/fav">Favorites</Link>
            </div>

            <div id="signup">
                <Link to="/Signup">Signup</Link>
            </div>
            
            <div id="add-movie">
                <Link to="/add">Add movie</Link>
            </div>

            {searchword && <div className="suggestion-box">
                <ul>
                    {movienames.map((movie)=>{
                        return (<Link to={`/moviedetails/${movie.id}`}>
                            <li onClick={()=>{setSearchword("")}}>{movie.moviename}</li></Link>)
                        })}
                </ul>
            </div>
            }
           
        </nav>
    );
}
export default Navbar;
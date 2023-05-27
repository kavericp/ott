import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";

const Favorites = () => {
    
        let [fav,setFav]=useState(null);
        useEffect(()=>{
            setFav(JSON.parse(localStorage.getItem("fav")))
        },[])
        return ( 
            <div className="fav">
                {fav && 
                <MoviesList movies={fav} title="Favorites movies"/>}

            </div>
     );
}
 
export default Favorites;
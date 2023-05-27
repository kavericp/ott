import { useParams } from "react-router-dom";
import MoviesList from "./MoviesList";
import { useState, useEffect } from "react";

const Search = () => {
    let { searchword } = useParams();
    let [movies, setMovies] = useState(null);
    let [error, setError] = useState(null);
    let [pending, setPending] = useState(true);

    useEffect(() => {
        setMovies(null);
        setPending(true);
        setTimeout(() => {
            fetch("http://localhost:4000/movies")
                .then((res) => { return res.json() })
                .then((data) => {
                     let d = data.filter((m) => { return (m.moviename.toLowerCase().startsWith(searchword.toLowerCase())) ||
                            (m.genre.toLowerCase() ===searchword.toLowerCase()) ||
                            (m.languages.some((l) => { return l.toLowerCase() === searchword.toLowerCase()  }))
                        }
                            )

                    //  console.log(data);
                    setMovies(d);
                    setPending(false);
                })
                .catch((err) => {
                    setError("404 Network issue!!!!!");
                    setPending(false);
                })
        }, 2000)
    }, [searchword])

    return (
        <div className="search-container">
            {pending === true && <h1>Loading</h1>}
            {movies && <MoviesList movies={movies} title="search result"></MoviesList>}
        </div>
    );
}

export default Search;
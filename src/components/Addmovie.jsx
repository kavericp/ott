import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Add_movie = () => {

    let navigate=useNavigate()

    
    let moviename=useRef();
    let hero=useRef();
    let heroine=useRef();
    let director=useRef();
    let genre=useRef();
    let yor=useRef();
    let rating=useRef();
    let poster=useRef();
    let trailer=useRef();
    let synopsis=useRef();

    let handelAddMovie=(e)=>{
        e.preventDefault()
        

        let newMovie = {
            moviename: moviename.current.value,
            hero: hero.current.value,
            heroine: heroine.current.value,
            director: director.current.value,
            languages : [],
            genre: genre.current.value,
            poster: poster.current.value,
            trailer: trailer.current.value,
            release: yor.current.value,
            rating: rating.current.value,
            synopsis : synopsis.current.value,
            
          }
          let options=document.getElementsByName("lang");
          for (let i = 0; i < options.length; i++) {
            if(options[i].checked==true){
                newMovie.languages.push(options[i].value)
            }
            
          }

        fetch("http://localhost:4000/movies" , 
        {
            method : "POST" ,
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(newMovie)
        } 
        )
        .then(()=>{
            alert("new data added");
            navigate("/")
            // window.location.reload();
        })
                
    }
    
    return ( 
        <div className="add">
            <h1>Add new movie</h1>
            <form onSubmit={handelAddMovie}>
            <input  type="text" placeholder="enter movie name" ref={moviename}/>
            <input  type="text" placeholder="enter hero name"  ref={hero}/>
            <input  type="text" placeholder="enter heroine name" ref={heroine}/>
            <input  type="text" placeholder="enter director name" ref={director} />
              <fieldset>
                <legend> Select Languages</legend>
                <input type="checkbox" name="lang" value="kannada" /><label htmlFor="">Kannada</label>
                <input type="checkbox" name="lang" value="Telugu" /><label htmlFor="">Telugu</label>
                <input type="checkbox" name="lang" value="Maliyalum" /><label htmlFor="">Maliyalum</label>
                <input type="checkbox" name="lang" value="Hindi" /><label htmlFor="">Hindi</label>
                <input type="checkbox" name="lang" value="Tamil" /><label htmlFor="">Tamil</label>
                 </fieldset> 

            
            <input  type="text" placeholder="enter genre name"  ref={genre}/>
            <input  type="url" placeholder="enter poster link" ref={poster}/>
            <input  type="url" placeholder="enter trailer link" ref={trailer} />
            <input  type="number" min="1950" max="2023" ref={yor} />
            <input  type="number" step="0.1" min="1" max="10" placeholder="rating" ref={rating}/>
            <textarea cols="70" rows="6" ref={synopsis}></textarea>
            


            <input type="submit" />
            </form>
        </div>
    );
}
 
export default Add_movie;
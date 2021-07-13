import React, {useState} from 'react'
import './MovieCard.css'
import ProgressRing from './ProgressRing';

function MovieCard({movie_title, percentage}) {

    const api_request = "https://api.themoviedb.org/3/search/movie?api_key="+process.env.REACT_APP_TMDB_KEY+"&language=en-US&query="+movie_title+"&page=1&include_adult=true"

    const [posterURL, setPosterURL] = useState("");
    

    // Defining async function
    async function getapi(url) {
        
        // Storing response
        const response = await fetch(url);
        
        // Storing data in form of JSON
        var data = await response.json();
        
        if (response) {
            // hideloader();
            if (data.results === undefined || data.results[0] === undefined ){
                return;
            }

            for(var i = 0; i < data.results.length; i++){
                if(data.results[i].original_title === movie_title){
                    setPosterURL(data.results[i].poster_path)
                    return;
                }
            }
            setPosterURL(data.results[0].poster_path)
            
        }
        
    }

    getapi(api_request)

    return (
        <div className="movie__card">
            <div className="movie__poster">
                <img 
                    src={"https://image.tmdb.org/t/p/w200"+posterURL}
                    alt={movie_title}></img>
            </div>

            <div className="movie__title">
                <h3>{movie_title}</h3>
                <div className='movie__ring'>
                { percentage ?  <ProgressRing percentageValue={percentage}/> : <p></p> }
                </div>
            </div>
            
        </div>
    )
}

export default MovieCard

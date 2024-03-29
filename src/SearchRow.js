import React, { useState } from 'react'
import './SearchRow.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


function SearchRow({title, update_function, update_recommendations}) {
    const [ liked, setLiked ] = useState( isMovieLiked({title}) );
    const rec_url = process.env.REACT_APP_RECOMMENDATIONS_URL+"/recommendation?movies="
    const test_url = "http://192.168.0.10:8080/recommendation?movies="

    function isMovieLiked(movie_title){
        var liked_movies = localStorage.getObj('liked_movies')

        if ( liked_movies === null ){
            return false;
        }

        for(var i = 0; i < liked_movies.length; i++) {
            if (liked_movies[i].title === movie_title.title) {
                return true;
            }
        }

        return false;
    }

    // Defining async function
  async function getRecommendations(url) {
      if(url === rec_url){
        localStorage.setObj('recommendations', []);
        update_recommendations()
        return;
      }
        
    const response = await fetch(url);

    var data = await response.json();
    
    if (response) {
        // hideloader();
        var recommendations = []

        for (const key in data) {
            const new_movie = {
                title: key,
                percentage: data[key]
            };
            recommendations.push(new_movie)
        }

      localStorage.setObj('recommendations', recommendations);
      update_recommendations()

    }
    
  }

  function convertLikedMoviesToString(){
    const liked_movies = localStorage.getObj('liked_movies');
    var movies_string = "";

    if ( liked_movies === null || liked_movies.length === 0) {
      return movies_string;
    }

    for(var i = 0; i < liked_movies.length; i++) {
      movies_string += liked_movies[i].title;
      if (i !== liked_movies.length-1){
        movies_string+= ","
      }
    }

    return movies_string;

  }

    const handleClick = () => {
        storeMovieToLocal(title)
        getRecommendations(rec_url+convertLikedMoviesToString())
        update_function()

      }

    return (
        <div className='searchRow'>
            <h1>{title}</h1>

            { isMovieLiked({title}) ?  <FavoriteIcon className="iconHeart" onClick={handleClick}/> : <FavoriteBorderIcon className="icon" onClick={handleClick}/> }
            
        </div>
    )
}

// Store the movie into the local liked movies
function storeMovieToLocal(movie_title){
    var old_liked_movies = localStorage.getObj('liked_movies')
    var liked_movies = []
    
    if ( !(old_liked_movies == null) ){
        liked_movies = [...old_liked_movies];
        // console.log("Hay " + old_liked_movies.length + " peliculas likeadas")
    }

    // Delete movie if exixsts
    for(var i = 0; i < liked_movies.length; i++) {
        if (liked_movies[i].title === movie_title) {
            liked_movies.splice(i,1);
            localStorage.setObj('liked_movies', liked_movies);
            console.log("Eliminando: " + movie_title)
            return;
        }
    }

    const new_movie = {
        title: movie_title
    };
    
    liked_movies.push(new_movie)
    
    localStorage.setObj('liked_movies', liked_movies);

    // localStorage.setObj('liked_movies', []); // For cleaning liked user's movies
    console.log("Peliculas likeadas: " + liked_movies.length)

    // console.log("El arreglo es:")
    // liked_movies.map((value, key) => {
    //     console.log(value.title)
    // })
}

export default SearchRow

// Functions for storing and retrieving arrays on local storage
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}
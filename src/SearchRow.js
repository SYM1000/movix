import React, { useState } from 'react'
import './SearchRow.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


function SearchRow({title, update_function}) {
    const [ liked, setLiked ] = useState( isMovieLiked({title}) );

    function isMovieLiked(movie_title){
        var liked_movies = localStorage.getObj('liked_movies')

        if ( liked_movies === null ){
            return false;
        }

        for(var i = 0; i < liked_movies.length; i++) {
            if (liked_movies[i].title === movie_title.title) {
                // console.log("la pelicula " + movie_title.title + " esta likeada")
                return true;
            }
        }

        return false;
    }

    const handleClick = () => {
        storeMovieToLocal(title)
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
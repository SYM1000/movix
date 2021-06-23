import React, { useState } from 'react'
import './SearchRow.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


// function isMovieLiked(movie_title){
//     var user_liked_movies = localStorage.getObj('liked_movies')
//     if ( user_liked_movies == null) {
//         return false
//     }

//     return (user_liked_movies.includes(movie_title));
    
// }

function SearchRow({title}) {
    // const [liked, setLiked] = useState(isMovieLiked({title}))

    const handleClick = () => {
        storeMovieToLocal(title)
        // setLiked(prevLiked => true)
      }

    return (
        <div className='searchRow'>
            <h1>{title}</h1>
            
            {/* {liked ? (
                <FavoriteIcon className="iconHeart" onClick={handleClick}/>
            ) : (
                <FavoriteBorderIcon className="icon" onClick={handleClick}/>
            )
            } */}

            <FavoriteBorderIcon className="icon" onClick={handleClick}/>
            
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

    if (liked_movies.includes(movie_title)){ // Delete movie if exixsts
        const delete_at = liked_movies.indexOf(movie_title);
        if (delete_at > -1) {
            liked_movies.splice(delete_at, 1);
        }

        localStorage.setObj('liked_movies', liked_movies);
        console.log("Eliminando: " + movie_title)
        return;
    }

    liked_movies.push(movie_title)
    localStorage.setObj('liked_movies', liked_movies);

    // localStorage.setObj('liked_movies', []); // For cleaning liked user's movies
    console.log("Peliculas likeadas: " + liked_movies)
}

export default SearchRow

// Functions for storing and retrieving arrays on local storage
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}
import React from 'react'
import './SearchRow.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function SearchRow({title}) {

    const handleClick = () => {
        storeMovieToLocal(title)
      }

    return (
        <div className='searchRow'>
            <h1>{title}</h1>
            <FavoriteBorderIcon className="icon" onClick={handleClick}/>
        </div>
    )
}

// Store the movie into the local seen movies
function storeMovieToLocal(movie_title){
    alert("La pelicula que te gusta es: " + movie_title);
}

export default SearchRow

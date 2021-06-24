import React from 'react'
import './HomeSection.css'
import MovieCard from './MovieCard'

function HomeSection({section_title, section_data}) {
    return (
        <div className="home__section">
            <div className="title__section">
                <h2>{section_title}</h2>
            </div>
            <div className="movies__section">
                {
                    section_data !== null ? (
                        section_data.map((value, key) =>{
                            // return <div className="movie__card"> {value.title} </div>
                            return <MovieCard movie_title={value.title}/>
                        })
                    ) : (
                        <h5>Add a movie</h5>
                    )
                }
            </div>
            
        </div>
    )
}

export default HomeSection

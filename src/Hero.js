import React from 'react'
import "./Hero.css"
import banner3 from './images/hero.png'

function Hero() {
    return (
        <div className="hero">
            <div className='hero__left'>
                <img src={banner3} alt="movix"></img>

            </div>

            <div className='hero__right'>
                <h1>Find new movies based on your personal taste</h1>

                <div className="hero__headlines">
                    <h5>Discover new movies</h5>
                    <h5>Get recommendations just for you</h5>
                    <h5>Enjoy your movies</h5>
                </div>

            </div>
            
        </div>
    )
}

export default Hero

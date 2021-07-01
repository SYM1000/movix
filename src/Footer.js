import React from 'react'
import "./Footer.css"
import About from './About';
import Contact from './Contact';
import Privacy from './Privacy';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <div className="footer__left">
                <h1>movix</h1>
                <div className="footer__slogan">
                    <div className="footer__slogan__left">
                        <h3>Find your next favorite</h3>
                        {/* <h3>movie</h3> */}
                    </div>
                    <div className="footer__slogan__right">
                        {/* <h3>Find your next favorite</h3> */}
                        <h3>movie</h3>
                    </div>
                </div>
            </div>

            <div className="footer__right">
                <div className="footer__options">
                    <Link className="link" to="/about">
                        <h3>About</h3>
                    </Link>
                    <Link className="link" to="/contact">
                        <h3>Contact</h3>
                    </Link>
                    <Link className="link" to="/privacy">
                        <h3>Privacy</h3>
                    </Link>
                    {/* <Link className="link" to="">
                        <h3>Feedback</h3>
                    </Link> */}
                </div>

            </div>
            
        </div>
    )
}

export default Footer

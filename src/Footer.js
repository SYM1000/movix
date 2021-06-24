import React from 'react'
import "./Footer.css"

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
                    <h3>About</h3>
                    <h3>Contact</h3>
                    <h3>Privacy</h3>
                    <h3>Feedback</h3>
                </div>

            </div>
            
        </div>
    )
}

export default Footer

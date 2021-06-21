import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <h1>movix</h1>
            </div>

            <div className="header__center">
                <SearchIcon />
                <input placeholder="Search" type="text" />
            </div>

            <div className="header__right">
                <div className="header__option">
                    <h2>Home</h2>
                </div>
                <div className="header__option">
                    <h2>Movies</h2>
                </div>
                <div className="header__option">
                    <h2>Discover</h2>
                </div>
                <div className="header__option">
                    <h2>Favorites</h2>
                </div>
            </div>

        </div>
    )
}

export default Header

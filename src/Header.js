import React,{ useState } from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import MoviesData from './movies_dataset.json'
import SearchRow from './SearchRow';

function Header() {

    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = MoviesData.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if(searchWord === "") {
            setFilteredData([])
        }else{
            setFilteredData(newFilter);
        }
        
    }

    return (
        <div className="header">
            <div className="header__left">
                <h1>movix</h1>
            </div>

            <div className="header__center">
                <div className='header__searchbar'>
                    <SearchIcon />
                    <input placeholder="Search a movie" type="text" onChange={handleFilter}/>
                </div>

                {filteredData.length !== 0 && (
                    <div className="dataResult">
                        {filteredData.slice(0,15).map((value, key) => {
                            // return <div className="dataItem"> {value.title} </div>
                            return <SearchRow title={value.title} />
                        })}
                    </div>
                )}
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

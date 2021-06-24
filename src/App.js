import './App.css';
import Footer from './Footer';
import Header from "./Header"
import Hero from './Hero';
import HomeSection from './HomeSection';
import OurFavoriteMovies from './OurFavoriteMovies.json'
import LikeableMovies from './LikeableMovies.json'
import {useState} from 'react' 

function App() {

  const [ likedMovies, setLikedMovies ] = useState(localStorage.getObj('liked_movies') );

  function updateLikedMovies() {
    setLikedMovies(localStorage.getObj('liked_movies'))
  }

  return (
    // BEM naming convention
    <div className="app">

      <Header update_function={updateLikedMovies}/>

      <Hero />

      {/* Section for Recommendations */}
      <HomeSection section_title="Your Liked Movies" section_data={likedMovies}/>
      {/* <HomeSection section_title="More Likeable Movies" section_data={LikeableMovies}/> */}
      <HomeSection section_title="Our Favorite Movies" section_data={OurFavoriteMovies}/>
      

      <Footer />

    </div>
  );
}

export default App;

// Functions for storing and retrieving arrays on local storage
Storage.prototype.setObj = function(key, obj) {
  return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
  return JSON.parse(this.getItem(key))
}
import './App.css';
import Footer from './Footer';
import Header from "./Header"
import Hero from './Hero';
import HomeSection from './HomeSection';
import OurFavoriteMovies from './OurFavoriteMovies.json'
import LikeableMovies from './LikeableMovies.json'
import {useState} from 'react'
import About from './About';
import Contact from './Contact';
import Privacy from './Privacy';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  require('dotenv').config()

  const [ likedMovies, setLikedMovies ] = useState(localStorage.getObj('liked_movies') );
  const [ recommendations, setRecommendations ] = useState( localStorage.getObj('recommendations') );

  function updateLikedMovies() {
    setLikedMovies(localStorage.getObj('liked_movies'))
  }

  function updateRecommendedMovies() {
    setRecommendations(localStorage.getObj('recommendations'))
  }

  const Home = () => {
    return (<div className ="home">
      <Hero />
      <HomeSection section_title="Your Liked Movies" section_data={likedMovies}/>
      <HomeSection section_title="Your Recommendations" section_data={ recommendations }/>
      <HomeSection section_title="More Likeable Movies" section_data={LikeableMovies}/>
      <HomeSection section_title="Our Favorite Movies" section_data={OurFavoriteMovies}/>
    </div>);
  }
  
  return (
    // BEM naming convention
    <Router>
    
    <div className="app">

    <Header update_function={updateLikedMovies} update_recommendations={updateRecommendedMovies}/>

      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/privacy" exact component={Privacy} />
      </Switch>

      <Footer />

    </div>
    </Router>
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
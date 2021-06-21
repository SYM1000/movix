import './App.css';
import Footer from './Footer';
import Header from "./Header"
import Hero from './Hero';

function App() {
  return (
    // BEM naming convention
    <div className="app">

      <Header />

      <Hero />

      {/* Section for Recommendations */}

      <Footer />

    </div>
  );
}

export default App;

import './App.css';
import Hero from './Components/Hero';
import Shop from './Components/Shop';
import About from './Components/About';
import ReviewContent from './Components/ReviewContent';
import Reviews from './Components/Review';


function App() {
  return (
    <div className="App">
      <Hero/>
      <Shop/>
      <About/>
      <ReviewContent/>
      <Reviews />
    </div>
  );
}

export default App;

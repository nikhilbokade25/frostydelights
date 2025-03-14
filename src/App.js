import './App.css';
import Hero from './Components/Hero';
import Shop from './Components/Shop';
import About from './Components/About';
import ReviewContent from './Components/ReviewContent';
import Reviews from './Components/Review';
import MailingList from './Components/MailingList';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Hero/>
      <Shop/>
      <About/>
      <ReviewContent/>
      <Reviews />
      <MailingList />
      <Footer/>
    </div>
  );
}

export default App;

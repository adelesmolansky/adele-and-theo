import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './util/Navbar';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import WhyILoveYou from './pages/WhyILoveYou';
import MovieDates from './pages/MovieDates';
import DinnerDates from './pages/DinnerDates';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/why-i-love-you" element={<WhyILoveYou />} />
        <Route path="/movie-dates" element={<MovieDates />} />
        <Route path="/dinner-dates" element={<DinnerDates />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Contacts from './pages/contacts';
import AccommodationPolicy from './components/information/AccommodationPolicy';
import HouseRules from './components/information/HouseRules';
import '../src/components/fonts.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/privacy-policy" element={<AccommodationPolicy />} />
          <Route path="/house-rules" element={<HouseRules />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

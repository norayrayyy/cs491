import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavigationBar  from './components/NavBar';
import Home from './pages/Home'
import Hobbies from './pages/Hobbies';
import HobbyCaption from './pages/HobbyCaption';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <NavigationBar />
        <div className ='container mt-4'>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/hobbies/:hobbyID" element={<HobbyCaption />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

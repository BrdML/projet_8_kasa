import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './utils/sass/main.scss';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route 
            path='/' 
            element={<Home />}
          />
          <Route 
            path='/about' 
            element={<About />}
          />
        </Routes>
    </>
  )
}

export default App
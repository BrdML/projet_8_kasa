import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './utils/sass/main.scss';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Logement from './pages/Logement';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


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
          <Route 
            path='/logement/:id' 
            element={<Logement />} 
            />
          <Route 
            path='*' 
            element={<Error />} 
          />
        </Routes>
      <Footer/>
    </>
  )
}

export default App
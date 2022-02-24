import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../src/styles/normalise.css';

import Home from './components/Home.js';
import Products from './components/Products.js';
import About from './components/About.js';
import NavBar from './components/NavBar.js';


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>

      <Route exact path='/' component={Home}/>
      <Route exact path='/' component={Products}/>
      <Route exact path='/' component={About}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;

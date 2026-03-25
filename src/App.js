// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Project from './components/Project';
import Socials from './components/Socials';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Project />
      <Socials />
    </div>
  );
};

export default App;

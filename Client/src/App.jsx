import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Exemplo from './components/exemplo';
import Home from './pages/Home';
import Projects from './pages/Projects'
import NavBarHeader from './components/NavBarHeader';

function App() {
  return (
    <Router>
    <NavBarHeader/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  </Router>
  );
}

export default App;

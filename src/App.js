import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages Imports
import Home from './pages/Home';
import CreateCar from './pages/CreateCar';

function App() {
  document.title = 'RegisCar';
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createCar" element={<CreateCar />} />
      </Routes>
    </Router>
  );
}

export default App;

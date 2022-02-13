import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Snake from './components/Snake/Snake';
import './App.scss';

function App() {
  return (
    <div className="app-container">
      <header>
        <Link to="/">Games</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/snake" element={<Snake/>}/>
      </Routes>
    </div>
  );
}

export default App;

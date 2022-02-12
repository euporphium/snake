import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SnakeGame from './components/Snake/SnakeGame';
import NonogramGame from './components/Nonogram/NonogramGame';
import './App.scss';

function App() {
  return (
    <div className="app-container">
      <header>
        <span>Games</span>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/snake">Snake</Link></li>
            <li><Link to="/nonogram">Nonogram</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<h2>Here be games</h2>}/>
          <Route path="/snake" element={<SnakeGame/>}/>
          <Route path="/nonogram" element={<NonogramGame/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;

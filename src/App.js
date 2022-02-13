import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SnakeGame from './components/Snake/SnakeGame';
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
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<h2>Here be games</h2>}/>
          <Route path="/snake" element={<SnakeGame/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;

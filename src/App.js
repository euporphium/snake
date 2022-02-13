import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import SnakeGame from './components/Snake/SnakeGame';
import './App.scss';

function App() {
  return (
    <div className="app-container">
      <header>
        <Link to="/">Games</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/snake" element={<SnakeGame/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;

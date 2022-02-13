import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

function Home() {
  return (
    <div className="home-container">
      <h1>Select a Game</h1>
      <nav>
        <ul>
          <li><Link to="/snake">Snake</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Home;
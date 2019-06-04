import React from 'react';
import MovieCover from './FilmCover.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
    <img src={MovieCover} alt='My favourite movie cover' />
      <div className="container">
        <div className="itemName">Daredevil</div>
        <div className="itemName">Godless</div>
        <div className="itemName">Gotham</div>
      </div>
      <div className="container">
        <div className="itemName">Supergirl</div>
        <div className="itemName">Vikings</div>
        <div className="itemName">Westworld</div>
      </div>
    </div>
  );
}

export default App;

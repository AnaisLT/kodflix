import React from 'react';
import movieCover from './FilmCover.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={movieCover} alt='My Favourite Movie Cover'/>
    </div>
  );
}

export default App;

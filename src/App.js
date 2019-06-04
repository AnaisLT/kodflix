import React from 'react';
import Daredevil from './images/Daredevil.jpg';
import Godless from './images/Godless.jpg';
import Gotham from './images/Gotham.jpg';
import Supergirl from './images/Supergirl.jpg';
import Vikings from './images/Vikings.jpg';
import Westworld from './images/Westworld.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="itemName">
          <img src={Daredevil} alt='Daredevil cover' />
        </div>
        <div className="itemName">
          <img src={Godless} alt='Godless cover' />
        </div>
        <div className="itemName">
          <img src={Gotham} alt='Gotham cover' />
        </div>
      </div>
      <div className="container">
        <div className="itemName">
          <img src={Supergirl} alt='Supergirl cover' />
        </div>
        <div className="itemName">
          <img src={Vikings} alt='Vikings cover' />
        </div>
        <div className="itemName">
          <img src={Westworld} alt='Westworld cover' />
        </div>
      </div>
    </div>
  );
}

export default App;

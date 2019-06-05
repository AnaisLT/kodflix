import React, { Component } from 'react';
import Daredevil from './images/Daredevil.jpg';
import Gotham from './images/Gotham.jpg';
import StarTrek from './images/Star Trek.jpg';
import Supergirl from './images/Supergirl.jpg';
import Vikings from './images/Vikings.jpg';
import Westworld from './images/Westworld.jpg';
import './App.css';

class App extends Component {
render () {
  return (
    <div className="App">
      <div className="container">
        <div className="itemName">
          <img src={Daredevil} alt='Daredevil cover' />
        </div>
        <div className="itemName">
          <img src={Gotham} alt='Gotham cover' />
        </div>
        <div className="itemName">
          <img src={StarTrek} alt='Star Trek cover' />
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
}

export default App;
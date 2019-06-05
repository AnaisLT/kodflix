import React, { Component } from 'react';
import Daredevil from './images/Daredevil.jpg';
import Gotham from './images/Gotham.jpg';
import StarTrek from './images/Star Trek.jpg';
import Supergirl from './images/Supergirl.jpg';
import Vikings from './images/Vikings.jpg';
import Westworld from './images/Westworld.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <br /><br /><br />
        <div className='container'>
          <div className='itemName'>
            <img src={Daredevil} alt='Daredevil cover' />
          <div className='overlay'>
            <h1>Daredevil</h1>
          </div>
          </div>
          <div className='itemName'>
            <img src={Gotham} alt='Gotham cover' />
            <div className='overlay'>
              <h1>Gotham</h1>
            </div>
          </div>
          <div className='itemName'>
            <img src={StarTrek} alt='Star Trek cover' />
            <div className='overlay'>
              <h1>Star Trek Discovery</h1>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='itemName'>
            <img src={Supergirl} alt='Supergirl cover' />
            <div className='overlay'>
              <h1>Supergirl</h1>
            </div>
          </div>
          <div className='itemName'>
            <img src={Vikings} alt='Vikings cover' />
            <div className='overlay'>
              <h1>Vikings</h1>
            </div>
          </div>
          <div className='itemName'>
            <img src={Westworld} alt='Westworld cover' />
            <div className='overlay'>
              <h1>Westworld</h1>
            </div>
          </div>
        </div>
      </div>
      );
    }
  }
  
  export default App;
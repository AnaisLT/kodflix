import React from 'react';
import TVshow from './TVshow';
import Daredevil from './images/Daredevil.jpg';
import Gotham from './images/Gotham.jpg';
import StarTrek from './images/Star Trek.jpg';
import Supergirl from './images/Supergirl.jpg';
import Vikings from './images/Vikings.jpg';
import Westworld from './images/Westworld.jpg';

export default function TVshowgallery() {
    return (
      <div className="App">
        <div className='container'>
          <TVshow id='Daredevil' name='Daredevil' cover={Daredevil} />
          <TVshow id='Gotham' name='Gotham' cover={Gotham} />
          <TVshow id='Star Trek' name='Star Trek Discovery' cover={StarTrek} />
        </div>
        <div className='container'>
          <TVshow id='Supergirl' name='Supergirl' cover={Supergirl} />
          <TVshow id='Vikings' name='Vikings' cover={Vikings} />
          <TVshow id='Westworld' name='Westworld' cover={Westworld} />
        </div >
      </div>
    );
  }
  
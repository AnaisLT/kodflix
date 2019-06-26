import React, { Component } from 'react';
import TVshow from './TVshow';
import getGallery from './gallery_get';

class Gallery extends Component {

  componentDidMount() {
    fetch('/rest/tvshows')
      .then(function(response) {
      return response.json();
      })
      .then(function(myJson) {
      console.log(myJson);
      });
  }
  render() {
    return (
      <div>
        <div className='container'>
          {
            getGallery().map(tvshow => (
              <TVshow
                key={tvshow.id}
                id={tvshow.id}
                name={tvshow.name}
                cover={tvshow.cover} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Gallery


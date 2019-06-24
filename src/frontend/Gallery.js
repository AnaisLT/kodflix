import React from 'react';
import TVshow from './TVshow';
import getGallery from './gallery_get';

export default function Gallery() {
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




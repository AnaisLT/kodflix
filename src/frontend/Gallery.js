import React, { Component } from 'react';
import TVCover from './TVCover.js';

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = { backendShows: []};
  }

  componentDidMount() {
    fetch('/rest/tvshows')
      .then(function (response) {
        return response.json();
      })
      .then(backendShows => {
        this.setState({ backendShows });
      });
  }

  render() {
    console.log(this.state.backendShows)
    return (
      <div>
        <div className='container'>
          {
            this.state.backendShows.map(tvshow => {
              return (
                <TVCover
                  key={tvshow.id}
                  id={tvshow.id}
                  title={tvshow.title} />
              )
            })
          }
        </div>
      </div>
    )
  }
}
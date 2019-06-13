import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from './gallery_get';

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      tvshow: {}
    };
  }

  componentDidMount() {
    let tvshowId = this.props.match.params.tvshowId;
    let tvshow = getGallery()
      .find((tvshow) => tvshow.id === tvshowId);
    this.setState({ tvshow: tvshow });
  }

  render() {
    if (this.state.tvshow === undefined) {
      return <Redirect to='/not-found' />;
    } else {
      return (
        <div>
          <h1>{this.state.tvshow.name}</h1>
          <p>More coming soon!</p>
          <p>Excuse our appearance while we suit up for the show.</p>
          <Link to='/'>Back to the home page</Link>
        </div >
      );
    }
  }
}
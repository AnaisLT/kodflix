import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from '../gallery_get';
import './Details.css'

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
        <div className='Details'>
          <h1 className='title'>{this.state.tvshow.name}</h1>
          <div className='content'>
            <div className='synopsis'>
              {this.state.tvshow.synopsis}
            </div>
            <div className='image'>
              <img
                src={this.state.tvshow.cover}
                alt={this.state.tvshow.name} />
            </div>
            </div>
          <button>
          <Link to='/'>Home page</Link>
          </button>
        </div >
      );
    }
  }
}
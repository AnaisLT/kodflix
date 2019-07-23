import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Details.css';

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      tvshow: {}
    };
  }

  componentDidMount() {
    fetch('/rest/tvshows')
      .then(response => response.json())
      .then(tvshows => {
        let tvshowId = this.props.match.params.tvshowId;
        let tvshow = tvshows
          .find((tvshow) => tvshow.id === tvshowId);
        this.setState({ tvshow })
      });
  }

  render() {
    let tvshow = this.state.tvshow;
      if (tvshow) {
      return tvshow.id ?
        <DetailsContent tvshow={tvshow} /> :
        <div />
        } 
        else {
          return <Redirect to='/not-found' />;
        };
    }
  }
  //   <button>
  //   <Link to='/'>Home page</Link>
  // </button>
  //   </div >

function DetailsContent({ tvshow }) {
  return (
    <div className='details'>
      <h1>{tvshow.title}</h1>
      <div className='details-content'>
        <h3 className='details-content-synopsis'>
          {tvshow.synopsis}
        </h3>
        <div className='details-content-cover'>
          <img
            src={require(`./common/images/${tvshow.id}.jpg`)}
            alt={tvshow.cover}
          />
        </div>
      </div>
    </div>
  )
}
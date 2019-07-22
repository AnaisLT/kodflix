import React from 'react';
import { Link } from 'react-router-dom';

export default class TVCover extends React.Component {
  
  render() {
    let { id, title } = this.props
    return (
      <Link to={`/${id}`} className='cover'>
        <img src={require(`./common/images/${id}.jpg`)} alt={title} />
        <div className='overlay'>
          <h1>{title}</h1>
        </div>
      </Link>
    );
  }
}


import React from 'react';
import { Link } from 'react-router-dom';

export default function TVshow(props) {
  return (
    <Link to='./Details' className='itemName'>
      <img src={props.cover} alt={`${props.name} cover`} />
      <div className='overlay'>
        <h1>{props.name}</h1>
      </div>
    </Link>
  );
}


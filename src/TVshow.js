import React, { Component } from 'react';

export default function TVshow(props) {
  return (
    <div className='itemName'>
      <img src={props.cover} alt={`${props.name} cover`} />
      <div className='overlay'>
        <h2>{props.name}</h2>
      </div>
    </div>
  );
}


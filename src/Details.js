import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      welcomeMessage: 'Welcome to the details page.'
    };
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState ({
        welcomeMessage: 'The best is yet to come!'
      });
    }, 3000);
  }
  render() {
    return (
      <div>
        <h1>{this.state.welcomeMessage}</h1>
        <p>Excuse our appearance while we get ready for the show.</p>
        <Link to='/'>Back to the home page</Link>
      </div>
    );
  }
}


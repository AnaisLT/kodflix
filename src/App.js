import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Details from './Details';
import TVshowgallery from './TVshowGallery';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Route exact path='/' component={TVshowgallery} />
        <Route exact path='/Details' component={Details} />
      </div>
      </Router>
    );
  }
}

export default App;
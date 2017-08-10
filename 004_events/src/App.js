import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>A Clock App</h1>
        <Clock delay="2000" />
        <Clock />
        <Clock />
      </div>
    );
  }
}

export default App;

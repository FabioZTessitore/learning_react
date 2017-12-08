import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Welcome to Clock App</h1>
        <hr />
        <h2>Clock 1</h2>
        <Clock />

        <h2>Clock 2</h2>
        <Clock />

        <h2>Clock 3</h2>
        <Clock />
      </div>
    );
  }
}

export default App;

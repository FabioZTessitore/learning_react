import React, { Component } from 'react';
import List from './List';
import './App.css';

const names = [
  { id: 1, name: "homer" },
  { id: 2, name: "marge" },
  { id: 3, name: "bart" },
  { id: 4, name: "lisa" },
  { id: 5, name: "maggie" },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <h3>List</h3>
        </div>
        <div className="App-intro">
          <List items={names} />
        </div>
      </div>
    );
  }
}

export default App;

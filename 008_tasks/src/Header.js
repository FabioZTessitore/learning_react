import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Task Manager</h1>
        <p>Coded with <span role="img" aria-label="coffee">&#x2615;</span> and
         <span role="img" aria-label="love">&#10084;</span><br />
         by Fabio Z Tessitore</p>
      </header>
    );
  }
}

export default Header;

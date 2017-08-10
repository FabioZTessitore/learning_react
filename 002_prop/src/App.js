import React, { Component } from 'react';
import Welcome from './Welcome';

class App extends Component {
  render() {
    return (
      <div>
        <Welcome name="Fabio" />
        <Welcome name="Ale" />
        <Welcome />
      </div>
    );
  }
}

export default App;

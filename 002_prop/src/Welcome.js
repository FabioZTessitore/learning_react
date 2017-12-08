import React, { Component } from 'react';
import './Welcome.css';

class Welcome extends Component {
  render() {
    if (this.props.name) {
      return <h1>Welcome <span className="name">{this.props.name}</span></h1>
    }

    return <h1>Welcome, <span className="noname">who are you?</span></h1>
  }
}

export default Welcome;

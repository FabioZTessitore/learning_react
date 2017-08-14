import React, { Component } from 'react';

class InputName extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    this.setState({
      name: e.target.value.toUpperCase(),
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(this.state.name);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input autoFocus type="text" id="name" value={this.state.name} onChange={this.handleChange} />
      </form>
    );
  }
};

export default InputName;

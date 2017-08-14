import React, { Component } from 'react';
import './List.css';

function ListItem(props) {
  return (
    <li>{props.name}</li>
  );
}

class List extends Component {
  render () {
    const names = this.props.items;

    return (
      <ul className="names-list">
      {names.map( name => (
        <ListItem key={name.id} name={name.name} />
      ))}
      </ul>
    )
  }
}

export default List;

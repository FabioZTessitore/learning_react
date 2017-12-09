import React, { Component } from 'react';

class TaskItem extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
  }

  toggle () {
    return this.props.toggle(this.props.id.substring(4));
  }

  getClass () {
    return this.props.completed ? 'completed' : '';
  }

  render () {
    return (
      <li className="list-group-item">
        <label className={"form-check-label " + this.getClass()}>
          <input className="form-check-input"
                  type="checkbox"
                  checked={this.props.completed}
                  onChange={this.toggle}
                  /> {this.props.value}
        </label>
      </li>
    );
  }
};

export default TaskItem;

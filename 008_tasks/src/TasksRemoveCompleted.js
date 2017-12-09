import React, { Component } from 'react';

class TasksRemoveCompleted extends Component {
  render() {
    return (
      <h4 className="text-right">
        <button className="btn btn-light" data-toggle="tooltip" data-placement="right" title="Remove Completed"
          onClick={this.props.removeCompleted}>
          <i className="fa fa-trash fa-2x"></i>
        </button>
      </h4>
    );
  }
}

export default TasksRemoveCompleted;

import React, { Component } from 'react';

class TasksAddTask extends Component {
  constructor (props) {
    super(props);

    this.addTask = this.addTask.bind(this);
  }

  addTask (event) {
    event.preventDefault();

    const taskName = event.target.textNewTask.value;
    event.target.textNewTask.value = '';
    this.props.addTask(taskName);
  }

  render() {
    return (
      <form className="mt-1" onSubmit={this.addTask} >
        <div className="form-group">
          <input type="text" className="form-control" id="textNewTask" placeholder="Add a Task" />
        </div>
      </form>
    );
  }
}

export default TasksAddTask;

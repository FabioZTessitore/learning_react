import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TasksList extends Component {
  render() {
    const tasks = this.props.tasks;

    return (
      <ul className="list-group text-left">
        {tasks.map( task => (
          <TaskItem key={task.id} id={"task" + task.id}
                  value={task.name} completed={task.completed}
                  toggle={this.props.toggle} />
        ))}
      </ul>
    );
  }
}

export default TasksList;

import React, { Component } from 'react';
import './Tasks.css';
import TasksRemoveCompleted from './TasksRemoveCompleted';
import TasksList from './TasksList';
import TasksAddTask from './TasksAddTask';
const cuid = require('cuid');

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        { id: cuid(), name: 'Item 1', completed: true },
        { id: cuid(), name: 'Item 2', completed: false },
        { id: cuid(), name: 'Item 3', completed: false },
        { id: cuid(), name: 'Item 4', completed: false },
      ],
    };

    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.removeCompleted = this.removeCompleted.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  toggleCompleted (taskID) {
    const tasks = this.state.tasks.slice();

    tasks.forEach( function (task, index) {
      if (task.id === taskID) {
        task.completed = !task.completed;
      }
    });

    this.setState( prevState => ({
      tasks: tasks,
    }));
  }

  removeCompleted () {
    let tasks = this.state.tasks.slice();

    tasks = tasks.filter( function (task) {
      return !task.completed;
    });

    this.setState( prevState => ({
      tasks: tasks,
    }));
  }

  addTask (taskName) {
    const task = {
      id: cuid(),
      name: taskName,
      completed: false,
    };

    this.setState( prevState => ({
      tasks: [...prevState.tasks, task],
    }));
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center bg-light tasks p-5">
          <div className="col-auto">
            <TasksRemoveCompleted removeCompleted={this.removeCompleted} />
            <TasksList tasks={this.state.tasks} toggle={this.toggleCompleted} />
            <TasksAddTask addTask={this.addTask} />
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;

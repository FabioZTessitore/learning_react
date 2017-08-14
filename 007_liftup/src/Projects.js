import React, { Component } from 'react';
import ProjectsList from './ProjectsList';
import ProjectNew from './ProjectNew';

const cuid = require('cuid');

class Projects extends Component {
  constructor (props) {
    super(props);
    this.state = {
      projects: [
        { id: 1, name: 'Learn React', },
        { id: 2, name: 'Learn Node.js', },
      ],
    };

    this.handleNewProject = this.handleNewProject.bind(this);
  }

  handleNewProject (projectName) {
    const project = {
      id: cuid(),
      name: projectName,
    };

    this.setState( prevState => ({
      projects: [...prevState.projects, project],
    }));
  }

  render() {
    return (
      <div className="projects">
        <h1>Projects</h1>
        <ProjectsList projects={this.state.projects} />
        <ProjectNew onNewProject={this.handleNewProject} />
      </div>
    );
  }
}

export default Projects;

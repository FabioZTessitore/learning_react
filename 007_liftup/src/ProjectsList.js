import React, { Component } from 'react';

class ProjectsList extends Component {
  render() {
    const projects = this.props.projects;

    return (
      <div className="projects-list">
        <ul>
        {projects.map( project => (
          <li key={project.id} id={project.id}>{project.id}) {project.name}</li>
        ))}
        </ul>
      </div>
    );
  }
}

export default ProjectsList;

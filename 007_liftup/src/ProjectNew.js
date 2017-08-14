import React, { Component } from 'react';

class ProjectNew extends Component {
  constructor (props) {
    super(props);

    this.state = {
      projectName: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    const projectName = e.target.projectName.value;
    this.setState({
      projectName: '',
    });
    this.props.onNewProject(projectName);
  }

  handleChange (e) {
    this.setState({
      projectName: e.target.value,
    });
  }

  render() {
    return (
      <div className="project-new">
        <form onSubmit={this.handleSubmit}>
          <input autoFocus type="text" id="projectName" onChange={this.handleChange} value={this.state.projectName} />
          <input type="submit" value="+" />
        </form>
      </div>
    );
  }
}

export default ProjectNew;

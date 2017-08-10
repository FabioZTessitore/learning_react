import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
  constructor (props) {
    super(props);

    this.toggleTimer = this.toggleTimer.bind(this);

    //this.buttonLabels = [ 'Start', 'Stop'];

    this.delay = this.props.delay || 1000;

    this.state = {
      date: new Date(),
      //labelIndex: 1,
      running: true,
    };
  }

  buttonLabel () {
    return this.state.running ? 'Stop' : 'Start';
  }

  buttonStyle () {
    return this.state.running ? 'clock-button-stop' : 'clock-button-start';
  }

  componentDidMount () {
    this.startTimer();
  }

  componentWillUnmount () {
    this.stopTimer();
  }

  startTimer () {
    this.timerID = setInterval(
      () => this.tick(),
      this.delay
    );
  }

  stopTimer () {
    clearInterval(this.timerID);
  }

  tick () {
    this.setState({
      date: new Date(),
    });
  }

  toggleTimer () {
    this.setState( prevState => ({
      running: !prevState.running,
    }));

    if (this.state.running) this.stopTimer();
    else this.startTimer();
  }

  render () {
    return (
      <div className="clock">
        <div className="clock-header">
          <p>A Clock Component</p>
          <p className="clock-delay">Delay: {this.delay}</p>
        </div>

        <div className="clock-time">
          <p>{this.state.date.toLocaleTimeString()}</p>
        </div>

        <div className="clock-button">
          <button className={this.buttonStyle()} onClick={this.toggleTimer}>{this.buttonLabel()}</button>
        </div>
      </div>
    );
  }
}

export default Clock;

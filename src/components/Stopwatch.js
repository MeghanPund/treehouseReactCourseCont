import React, { Component } from "react";

class Stopwatch extends Component {

  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0
  };

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 100);
  }

  tick = () => {
    console.log('ticking...')
  }

  handleStopwatch = () => {
    this.setState({
      isRunning: !this.state.isRunning
    });
    if (!this.state.isRunning) {
      console.log('starting...')
    }
  }

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">0</span>
        <button onClick={this.handleStopwatch}>
          { this.state.isRunning ? 'Stop' : 'Start' }
        </button>
        <button>Reset</button>
      </div>
    )
  }
}

export default Stopwatch;
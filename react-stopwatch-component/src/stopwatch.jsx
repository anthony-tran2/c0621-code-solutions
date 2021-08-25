import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.playPause = this.playPause.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      seconds: 0,
      timer: 'paused'
    };
  }

  playPause() {
    if (this.state.timer === 'paused') {
      this.timer();
    } else {
      this.clear();
    }
  }

  reset() {
    this.setState(prev => {
      if (prev.timer === 'paused') {
        return { seconds: 0 };
      }
    });
  }

  increment() {
    this.setState(prev => ({ seconds: prev.seconds + 1 }));
  }

  timer() {
    this.timerId = setInterval(() => this.increment(), 1000);
    this.setState(prev => ({ timer: 'play' }));
  }

  clear() {
    clearInterval(this.timerId);
    this.setState(prev => ({ timer: 'paused' }));
  }

  render() {
    if (this.state.timer === 'paused') {
      return (
        <div className="row true-center">
          <div className="text-align-center">
            <div onClick={this.reset} className="stopwatch">
              <p className="timer text-align-center margin-0">{this.state.seconds}</p>
            </div>
              <i onClick={this.playPause} className="fas fa-play text-align-center"></i>
          </div>
        </div>
      );
    } else {
      return (
        <div className="height row true-center">
          <div className="text-align-center">
            <div className="stopwatch">
              <p className="timer text-align-center margin-0">{this.state.seconds}</p>
            </div>
            <i onClick={this.playPause} className="fas fa-pause text-align-center"></i>
          </div>
        </div>
      );
    }
  }
}

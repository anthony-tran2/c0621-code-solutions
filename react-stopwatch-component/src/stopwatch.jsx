import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.playPause = this.playPause.bind(this);
    this.stopwatch = this.stopwatch.bind(this);
    this.state = {
      seconds: 0,
      timer: 'paused'
    };
  }

  playPause() {
    this.setState(prev => {

    });
  }

  stopwatch() {
    this.setState(prev => {
      if (prev.timer === 'paused') return { seconds: 0 };
    });
  }

  render() {
    return (
      <div className="row true-center">
        <i onClick={this.playPause} className="fas fa-play"></i>
      </div>
    );
  }
}

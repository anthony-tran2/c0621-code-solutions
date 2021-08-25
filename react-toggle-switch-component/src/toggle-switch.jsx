import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prev => ({ on: !this.state.on }));
  }

  render() {
    if (!this.state.on) {
      return (
        <div className="row align-center">
          <button onClick={this.handleClick} className="switch off">
            <div className="circle switch-off"></div>
          </button>
          <p onClick={this.handleClick}>OFF</p>
        </div>
      );
    } else {
      return (
        <div className="row align-center">
          <button onClick={this.handleClick} className="switch on">
            <div className="circle switch-on"></div>
          </button>
          <p onClick={this.handleClick}>ON</p>
        </div>
      );
    }
  }
}

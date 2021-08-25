import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { Clicks: 0 };
  }

  handleClick() {
    this.setState(prev => prev.Clicks++);
  }

  render() {
    if (this.state.Clicks < 4) {
      return <button onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.Clicks < 7) {
      return <button onClick={this.handleClick} className='purple'>Hot Button</button>;
    } else if (this.state.Clicks < 10) {
      return <button onClick={this.handleClick} className='light-red'>Hot Button</button>;
    } else if (this.state.Clicks < 13) {
      return <button onClick={this.handleClick} className='light-orange'>Hot Button</button>;
    } else if (this.state.Clicks < 16) {
      return <button onClick={this.handleClick} className='yellow'>Hot Button</button>;
    } else {
      return <button onClick={this.handleClick} className='white'>Hot Button</button>;
    }
  }
}

ReactDOM.render(
  <HotButton />,
  document.querySelector('#root')
);

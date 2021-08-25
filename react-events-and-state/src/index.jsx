import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState(prevState => {
      if (!this.state.isClicked) {
        return ({
          isClicked: !prevState.isClicked
        });
      }
    }
    );
  }

  render() {
    return <button onClick={this.handleClick} >
      {this.state.isClicked ? 'Thanks!' : 'Click Me!'}
      </button>;
  }
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);

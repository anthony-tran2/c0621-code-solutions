import React from 'react';

const words = ['The', 'World', 'Burn', 'MUAHAHAHAHA'];

function CustomAnchor(props) {
  return (
    <div className="padding-bottom-1rem menuADiv">
      <a>{props.word}</a>
    </div>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      modal: false
    };
  }

  handleClick(e) {
    if (e.target.tagName === 'A' || e.target.tagName === 'I' || e.target.className.includes('on-screen') || e.target.className.includes('menuADiv') || e.target.className.includes('off-screen')) this.setState(prev => ({ modal: !prev.modal }));
  }

  render() {
    if (this.state.modal) {
      return (
        <div>
          <div>
            <i onClick={this.handleClick} className="fas fa-bars margin-left-half-rem margin-top-half-rem"></i>
          </div>
          <div onClick={this.handleClick} className="row modal-height on-screen">
            <div className="menu-container menu-on modal-height">
              <h1 className="margin-left-menu">Watch</h1>
              <div className="margin-left-menu">
                {words.map(value => <CustomAnchor key={value} word={value} />)}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <i onClick={this.handleClick} className="fas fa-bars margin-left-half-rem margin-top-half-rem"></i>
          </div>
          <div onClick={this.handleClick} className="row modal-height off-screen">
            <div className="menu-container menu-off modal-height">
              <h1 className="margin-left-menu">Watch</h1>
              <div className="margin-left-menu">
                {words.map(value => <CustomAnchor key={value} word={value} />)}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

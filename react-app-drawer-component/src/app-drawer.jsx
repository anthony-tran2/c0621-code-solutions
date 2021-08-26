import React from 'react';

function CustomAnchor(props) {
  return (
    <div className="padding-bottom-1rem menuADiv">
      <a>{props.name}</a>
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
    if (e.target.tagName === 'A' || e.target.tagName === 'I' || e.target.className.includes('tint') || e.target.className.includes('menuADiv')) this.setState(prev => ({ modal: !prev.modal }));
  }

  render() {
    if (this.state.modal) {
      return (
        <div>
          <div>
            <i onClick={this.handleClick} className="fas fa-bars margin-left-half-rem margin-top-half-rem"></i>
          </div>
          <div onClick={this.handleClick} className="row modal-height position-fixed tint">
            <div className="menu-container">
              <h1 className="margin-left-menu">Watch</h1>
              <div className="margin-left-menu">
                <CustomAnchor name="The" />
                <CustomAnchor name="World" />
                <CustomAnchor name="Burn" />
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
          <div onClick={this.handleClick} className="row modal-height position-fixed tint hidden">
            <div className="menu-container">
              <h1 className="margin-left-menu">Watch</h1>
              <div className="margin-left-menu">
                <CustomAnchor name="The" />
                <CustomAnchor name="World" />
                <CustomAnchor name="Burn" />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

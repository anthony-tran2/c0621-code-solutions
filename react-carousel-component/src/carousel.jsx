import React from 'react';

const images = [
  {
    number: '001',
    name: 'Bulbasaur',
    src: '../images/001.png'
  },
  {
    number: '004',
    name: 'Charmander',
    src: '../images/004.png'
  },
  {
    number: '007',
    name: 'Squirtle',
    src: '../images/007.png'
  },
  {
    number: '025',
    name: 'Pikachu',
    src: '../images/025.png'
  },
  {
    number: '039',
    name: 'Jigglypuff',
    src: '../images/039.png'
  }
];

function PokeImage(props) {
  if (props.el === 'img') {
    return (
      <img src={props.src} alt={props.name} className={props.index === props.current ? '' : 'hidden'} />
    );
  } else {
    return (
      <i data-index={props.index} className={props.index === props.current ? 'fas fa-circle dot-column' : 'far fa-circle dot-column'}></i>
    );
  }
}

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.changeInterval = this.changeInterval.bind(this);
    this.dotMap = this.dotMap.bind(this);
    this.currentImg = this.currentImg.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      index: 0
    };
    this.intervalId = setInterval(this.changeInterval, 3000);
  }

  dotMap() {
    let i = 0;
    const dotMap = images.map(value => {
      i++;
      return <PokeImage key={value.number} index={i - 1} current={this.state.index} />;
    });
    return dotMap;
  }

  currentImg() {
    let i = 0;
    const imgMap = images.map(value => {
      i++;
      return <PokeImage el='img' key={value.number} index={i - 1} current={this.state.index} name={value.name} src={value.src} />;
    });
    return imgMap;
  }

  changeInterval() {
    if (this.state.index === images.length - 1) {
      this.setState({ index: 0 });
    } else this.setState(prev => ({ index: prev.index + 1 }));
  }

  handleClick(e) {
    if (e.target.getAttribute('data-index')) {
      clearInterval(this.intervalId);
      this.setState({ index: parseInt(e.target.getAttribute('data-index')) });
      this.intervalId = setInterval(this.changeInterval, 3000);
    } else if (e.target.getAttribute('class').includes('fa-chevron-left')) {
      clearInterval(this.intervalId);
      if (this.state.index === 0) {
        this.setState({ index: images.length - 1 });
      } else this.setState(prev => ({ index: prev.index - 1 }));
      this.intervalId = setInterval(this.changeInterval, 3000);
    } else if (e.target.getAttribute('class').includes('fa-chevron-right')) {
      clearInterval(this.intervalId);
      this.changeInterval();
      this.intervalId = setInterval(this.changeInterval, 3000);
    }
  }

  render() {
    return (
      <div className="carousel">
       <div onClick={this.handleClick} className="row true-center">
         <div className="arrow-column">
           <i className="fas fa-chevron-left font-size-3rem"></i>
         </div>
         <div className="img-column">
           <div className="img-container row true-center justify-between">
             {this.currentImg()}
           </div>
         </div>
         <div className="arrow-column  text-align-right">
           <i className="fas fa-chevron-right font-size-3rem"></i>
         </div>
       </div>
        <div onClick={this.handleClick} className="row true-center font-size-2rem">
         {this.dotMap()}
         </div>
     </div>
    );
  }
}

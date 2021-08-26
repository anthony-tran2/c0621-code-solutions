import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function MakeLi(props) {
  return (
    <li>{props.name}</li>
  );
}

function Pokemans(props) {
  const pokemans = props.pokemans;
  return (
    <ul>
      {
        pokemans.map(value => <MakeLi key={value.number} name={value.name}></MakeLi>)
      }
    </ul>
  );
}

ReactDOM.render(
  <Pokemans pokemans={pokedex} />, document.querySelector('#root')
);

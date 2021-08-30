fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    if (!res.ok) return console.error(res); else return res.json();
  })
  .then(res => {
    console.log(res);
  });

fetch('https://pokeapi.co/api/v2/pokemon/108')
  .then(res => {
    if (!res.ok) return console.error(res); else return res.json();
  })
  .then(res => console.log(res));

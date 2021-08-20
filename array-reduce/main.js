const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((total, value) => total + value);
const product = numbers.reduce((product, value) => product * value);
const balance = account.reduce((total, value) => {
  let output = 0;
  if (value.type === 'deposit') { output = value.amount; } else if (value.type === 'withdrawal') { output = -value.amount; }
  return total + output;
}, 0);
const composite = traits.reduce((bigObject, currentObj) => {
  return Object.assign(bigObject, currentObj);
}, {});

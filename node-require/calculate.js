var add = require('./add');
var subtract = require('./subtract');
var divide = require('./divide');
var multiply = require('./multiply');

if (process.argv[3] === 'plus') {
  console.log(add(process.argv[2], process.argv[4]));
} else if (process.argv[3] === 'minus') {
  console.log(subtract(process.argv[2], process.argv[4]));
} else if (process.argv[3] === 'times') {
  console.log(multiply(process.argv[2], process.argv[4]));
} else if (process.argv[3] === 'over') {
  console.log(divide(process.argv[2], process.argv[4]));
}

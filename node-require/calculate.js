const add = require('./add');
const subtract = require('./subtract');
const divide = require('./divide');
const multiply = require('./multiply');
const firstNum = parseFloat(process.argv[2]);
const secondNum = parseFloat(process.argv[4]);
const operation = process.argv[3];

if (isNaN(firstNum) || isNaN(secondNum)) {
  console.log('Invalid number. Try again!');
} else if (operation === 'plus') {
  console.log(add(firstNum, secondNum));
} else if (operation === 'minus') {
  console.log(subtract(firstNum, secondNum));
} else if (operation === 'times') {
  console.log(multiply(firstNum, secondNum));
} else if (operation === 'over') {
  console.log(divide(firstNum, secondNum));
} else {
  console.log('Invalid operation. Try again!');
}

const doubled2 = input => { return input * 2; };
const prices2 = input => { return `$${input.toFixed(2)}`; };
const upperCased2 = input => { return input.toUpperCase(); };
const firstLetters2 = input => { return input[0]; };

function map(array, transform) {
  const output = [];
  array.forEach(value => {
    output.push(transform(value));
  });
  return output;
}

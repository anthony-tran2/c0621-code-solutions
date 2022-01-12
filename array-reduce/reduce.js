const sum2 = (input1, input2) => { return input1 + input2; };
const product2 = (input1, input2) => { return input1 * input2; };
const balance2 = (input1, input2) => {
  let output = 0;
  if (input2.type === 'deposit') { output = input2.amount; } else if (input2.type === 'withdrawal') { output = -input2.amount; }
  return input1 + output;
};
const composite2 = (input1, input2) => { return Object.assign(input1, input2); };

function reduce(array, reducer, initialValue) {
  let output = null;
  if (!initialValue && initialValue !== 0) { output = array[0]; } else { output = initialValue; }
  for (let i = 0; i < array.length; i++) {
    if (output === array[0]) {
      i++;
      output = reducer(output, array[i]);
    } else {
      output = reducer(output, array[i]);
    }
  }
  return output;
}

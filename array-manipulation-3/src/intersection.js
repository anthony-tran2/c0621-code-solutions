/* exported intersection */

// create output Storage
// create storage for first Array
// create storage for second Array
// create counter for second array set to the last value of the array
// for each item in the first array storage, startin at the first one:
//   if the current index is equal to the current value of the second array
//     add the current index in the first array to the output
//   otherwise if the counter value is less than 0
//     reset the counter for the second array
//   otherwise
//     decrease the counter by one
//     decrease the index by one
// return output

function intersection(first, second) {
  var output = [];
  var arrayOne = first.slice(0);
  var arrayTwo = second.slice(0);
  var arrayTwoCounter = arrayTwo.length - 1;
  for (var arrayOneIndex = 0; arrayOneIndex < arrayOne.length; arrayOneIndex++) {
    if (arrayOne[arrayOneIndex] === arrayTwo[arrayTwoCounter]) {
      output.push(arrayOne[arrayOneIndex]);
    } else if (arrayTwoCounter < 0) {
      arrayTwoCounter = arrayTwo.length - 1;
    } else {
      arrayTwoCounter--;
      arrayOneIndex--;
    }
  }
  return output;
}

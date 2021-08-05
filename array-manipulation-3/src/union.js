/* exported union */

// create output Storage
// create storage for first Array
// create storage for second Array
// create counter for second array set to the last value of the array
// for each item in the first array storage, startin at the first one:
//   if the current index is equal to the current value of the second array
//     remove the current index from array two
//     decreate the first index by one
//   otherwise if the counter value is less than 0
//     reset the counter for the second array
//     push the value of the current item in the first array into the output
//   otherwise
//     decrease the counter by one
//     decrease the index by one
// for each item in the second array storage
//   add it to the output storage
// return output

function union(first, second) {
  var output = [];
  var arrayOne = first.slice(0);
  var arrayTwo = second.slice(0);
  var arrayTwoCounter = arrayTwo.length - 1;
  for (var arrayOneIndex = 0; arrayOneIndex < arrayOne.length; arrayOneIndex++) {
    if (arrayOne[arrayOneIndex] === arrayTwo[arrayTwoCounter]) {
      arrayTwo.splice(arrayTwoCounter, 1);
      arrayOneIndex--;
    } else if (arrayTwoCounter < 0) {
      arrayTwoCounter = arrayTwo.length - 1;
      output.push(arrayOne[arrayOneIndex]);
    } else {
      arrayTwoCounter--;
      arrayOneIndex--;
    }
  }
  for (var i = 0; i < arrayTwo.length; i++) {
    output.push(arrayTwo[i]);
  }
  return output;
}

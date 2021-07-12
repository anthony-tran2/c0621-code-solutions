/* exported includes */

// create storage for output
// for each item in the Array, starting at the first one:
//   if the item is strictly equal to the value you input:
//     -set output to true
//     -exit the loop
// return the output storage

function includes(array, value) {
  var boolean = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      boolean = true;
      break;
    }
  }
  return boolean;
}

/* exported flatten */

// create output Storage
// for each index in the Array, starting at the first one:
//   if the type of the current index is not an object:
//     add the current value to the output
//   otherwise:
//     for each item in the index, starting at the first one:
//       add the current value to the output Storage
// return output storage

function flatten(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof (array[i]) !== 'object') {
      output.push(array[i]);
    } else {
      for (var d = 0; d < array[i].length; d++) {
        output.push(array[i][d]);
      }
    }
  }
  return output;
}

/* exported unique */

// create output Storage
// for each index in the Array, starting at the first one:
//   add the current index to the Array
//     for each index in the output Storage, starting at the first one:
//       if the current index of the array is equal to the current index in the output storage:
//         remove the last index in the output storage
//         end the loop
// return output storage

function unique(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (output[0] === undefined) {
      output.push(array[i]);
    } else {
      for (var d = 0; d < output.length; d++) {
        if (output[d] !== array[i]) {
          output.push(array[i]);
        }
      }
    }
  }
  return output;
}

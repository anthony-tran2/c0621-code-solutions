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
  for (var c = 0; c < array.length; c++) {
    output.push(array[c]);
  }
  for (var i = 0; i < output.length; i++) {
    for (var d = output.length - 1; d >= 0; d--) {
      if (output[d] === output[i] && d !== i) {
        output.splice(d, 1);
      }
    }
  }
  return output;
}

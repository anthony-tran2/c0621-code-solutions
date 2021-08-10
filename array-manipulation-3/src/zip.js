/* exported zip */

// create output Storage
// create storage for zipped array
// variable equal to first array length
// if the first array is longer than the second:
//   use the second array length
// for each index of the arrays, starting at the first one:
//   add the current index of array 1 to zip storage
//   add the current index of array 2 to zip storage
//   add zip storage to output storage
//   clear zip storage;
// return output storage

function zip(first, second) {
  var output = [];
  var zipped = [];
  var length = first.length;
  if (first.length > second.length) {
    length = second.length;
  }
  for (var i = 0; i < length; i++) {
    zipped.push(first[i]);
    zipped.push(second[i]);
    output.push(zipped);
    zipped = [];
  }
  return output;
}

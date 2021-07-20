/* exported equal */

// if the first array length is not the same as the second one:
//   return false
// for each index for each Array, starting at the first one:
//   if the current index of array 1 and current index of array 2 are not equal:
//     return false
// return true

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}

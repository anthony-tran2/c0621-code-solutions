/* exported findIndex */

function findIndex(array, value) {
  var valueAtIndex = -1;
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      valueAtIndex = i;
      break;
    }
  }
  return valueAtIndex;
}

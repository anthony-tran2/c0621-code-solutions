/* exported take */

// create output Storage
// for how many ever items in the Array you want, starting at the first one:
//   -add the current value to the output Storage
// return storage output

function take(array, count) {
  var newArray = [];
  if (array.length > count) {
    for (var i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
  } else {
    newArray = array;
  }
  return newArray;
}

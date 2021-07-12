/* exported takeRight */

// create output Storage
// if the number of items in the array is greater than the count:
//   for how many ever items you want, starting at the last item:
//     add the item to the beginning of the output storage
// otherwise:
//   set output storage equal to array
// return output storage

function takeRight(array, count) {
  var newArray = [];
  if (array.length > count) {
    for (var i = array.length - 1; i >= array.length - count; i--) {
      newArray.unshift(array[i]);
    }
  } else {
    newArray = array;
  }
  return newArray;
}

/* exported dropRight */

// create output Storage
// if list of items in array is greater than count value:
//   for how many ever items in the list you webkitCancelAnimationFrame, starting at the first item:
//     add the item to the output Storage
// otherwise:
//   set the output storage equal to your array
// return value of output storage

function dropRight(array, count) {
  var newArray = [];
  if (array.length > count) {
    for (var i = 0; i < array.length - count; i++) {
      newArray.push(array[i]);
    }
  } else {
    newArray = array;
  }
  return newArray;
}

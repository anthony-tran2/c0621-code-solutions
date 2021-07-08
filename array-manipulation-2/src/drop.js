/* exported drop */

// create output Storage
// if the input length is greater than the value:
//   for each item in the array, starting after how many elements you want to get rid of:
//     add the current item to the new output Storage
// otherwise:
//   set output storage equal to the array
// return the value of the output storage

function drop(array, count) {
  var newArray = [];
  if (array.length > count) {
    for (var i = count; i < array.length; i++) {
      newArray.push(array[i]);
    }
  } else {
    newArray = array;
  }
  return newArray;
}

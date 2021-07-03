/* exported reverse */

// a way to start work
//   an empty container to store your new list
//   way to repeat an action
//     tell your repeating action to start at the end
//     tell your repeating action to stop after you input the first item in the list
//     decrement your starting value by one to move to the previous item in the list
//       push the current item into your new list
//   return the value of your new list

function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

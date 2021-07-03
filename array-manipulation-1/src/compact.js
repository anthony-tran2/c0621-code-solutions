/* exported compact */

// way to start work
//   make empty container to store new values
//   way to repeat action
//     tell action to start from the first value in the list
//     tell action to stop at end of list
//     increment starting value by one to move on to next item in list
//       if the item in list is equal to a truth
//         then add the item to the container with the new list in it
//   return the value of the list

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

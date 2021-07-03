/* exported initial */

// a way to start work
//   an empty container to store your new list
//   way to repeat an action
//     tell your repeating action to where to start
//     tell your repeating action top stop at the second to last item in the list
//     increment your starting value by one to move on to the next item in the list
//       push the current item into your new list
//   return the value of your new list

function initial(array) {
  var newArray = [];
  for (var i = 0; i < (array.length - 1); i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

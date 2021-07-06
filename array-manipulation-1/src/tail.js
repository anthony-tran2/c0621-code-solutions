/* exported tail */

// way to start action
//    make a container to store new list in
//    repeating action that goes through the list
//      tell the action to start on the second word
//      tell the action when to stop
//      increase the starting value by one so it moves on to the next word
//        take the current word and add it to the new list
//    return the value of the container

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

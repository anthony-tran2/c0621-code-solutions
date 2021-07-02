/* exported isUpperCased */

// way to start a process
//  container to store a value of nothing
//  way to repeat and action
//      tell action where to start
//      tell action when to stop
//      increase the starting character by one to move to the next character
//        statement to check if the character is uppercase
//          if it is then give your container the value true
//        if it is not then
//          set the value in your container to false
//          and end the repeating action
//  return the value of your container
function isUpperCased(word) {
  var boolean = null;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      boolean = true;
    } else {
      boolean = false;
      break;
    }
  }
  return boolean;
}

/* exported isVowel */

// way to start a process
//   container to store value set equal to nothing
//   lower case the character and check if the is equal to 'a'
//     if yes set container value to true
//   if not lower case the character and check if the is equal to 'e'
//     if yes set container value to true
//   if not lower case the character and check if the is equal to 'i'
//     if yes set container value to true
//   if not lower case the character and check if the is equal to 'o'
//     if yes set container value to true
//   if not lower case the character and check if the is equal to 'u'
//     if yes set container value to true
//   if not then
//     set value to false
//   return the value in the container

function isVowel(char) {
  var boolean = null;
  if (char.toLowerCase() === 'a') {
    boolean = true;
  } else if (char.toLowerCase() === 'e') {
    boolean = true;
  } else if (char.toLowerCase() === 'i') {
    boolean = true;
  } else if (char.toLowerCase() === 'o') {
    boolean = true;
  } else if (char.toLowerCase() === 'u') {
    boolean = true;
  } else {
    boolean = false;
  }
  return boolean;
}

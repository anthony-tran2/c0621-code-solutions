/* exported getLastChar */

// way to start a process
//   get the length of a string a subtract it by one to get the value of the last piece of your string and store it in a container
//   return the value stored inside the container

function getLastChar(string) {
  var lastChar = string[string.length - 1];
  return lastChar;
}

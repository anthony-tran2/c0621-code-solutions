/* exported getWords */

// way to start a process
//  set the value to an empty container
//  if the value has words
//    seperate words by identifying spaces and store the words into a container
//  return the value of the container

function getWords(string) {
  var wordsArray = [];
  if (string !== '') {
    wordsArray = string.split(' ');
  }
  return wordsArray;
}

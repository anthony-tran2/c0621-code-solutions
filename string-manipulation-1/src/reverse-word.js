/* exported reverseWord */

// way to start a process
//   place to store your new word
//   way to go through all of your letters and reverse them
//     tell your action to start at the end
//     tell your action to stop when you reach the front of the word
//     tell your action to decrease the starting value by one to move to the previous character of the word
//       take the current character and store it in the empty container for your new word
//   return the value of your new word

function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}

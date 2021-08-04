/* exported reverseWords */

// create output storage
// create word storage
// for each character in the string starting at the last one:
//   if the character is a space:
//     add the space to the beginning of the word storage
//     add the word to the beginning of the output storage
//     clear the word storage
//   otherwise:
//     add the character to the end of the word Storage
// add the final word to the output
// return the output storage

function reverseWords(string) {
  var output = '';
  var word = '';
  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] === ' ') {
      word = string[i] + word;
      output = word + output;
      word = '';
    } else {
      word += string[i];
    }
  }
  output = word + output;
  return output;
}

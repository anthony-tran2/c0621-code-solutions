/* exported capitalize */

// create storage for output and set it equal to the first character of the string uppercased
// for each character in the String, starting with the second character:
//   -add the lowercase character to the current output storage and set the output storage equal to the new value
// return the output storage

function capitalize(word) {
  var newWord = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    newWord += word[i].toLowerCase();
  }
  return newWord;
}

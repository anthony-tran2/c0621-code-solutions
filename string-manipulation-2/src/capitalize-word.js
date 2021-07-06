/* exported capitalizeWord */

// storage for output
// if the word all lowercased is equal to 'javascript':
//   -for each character of the String, starting at the beginning:
//     -if the character lowercased is equal to 'j' or 's':
//       -add the character uppercased to the output storage
//     -otherwise:
//       -add the character lowercased to the output storage
// otherwise:
//   add the first character uppercased to the output storage
//   for each character of the string, starting at the second character:
//     -add the character lowercased to the output storage
// return the output storage

function capitalizeWord(word) {
  var newWord = '';
  if (word.toLowerCase() === 'javascript') {
    for (var i = 0; i < word.length; i++) {
      if (word[i].toLowerCase() === 'j' || word[i].toLowerCase() === 's') {
        newWord += word[i].toUpperCase();
      } else {
        newWord += word[i].toLowerCase();
      }
    }
  } else {
    newWord += word[0].toUpperCase();
    for (var k = 1; k < word.length; k++) {
      newWord += word[k].toLowerCase();
    }
  }
  return newWord;
}

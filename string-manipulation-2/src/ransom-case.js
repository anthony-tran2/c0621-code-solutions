/* exported ransomCase */

// create storage for output
// for each character in the string, starting at the first character:
//   if the position is odd:
//     -capitalize the character and add it to the output storage
//   otherwise:
//     -lower case the character and add it to the output storage
// return the output storage

function ransomCase(string) {
  var newWord = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      newWord += string[i].toUpperCase();
    } else {
      newWord += string[i].toLowerCase();
    }
  }
  return newWord;
}

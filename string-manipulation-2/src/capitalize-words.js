/* exported capitalizeWords */

// create output storage
// create list storage and put the words in the list storage in the order they were originally in
// for each word in the list, starting at the first one:
//   -create storage for old word
//   -create storage for new word
//   -capitalize the first character of the old word and store it in the new word storage
//   -for every character of the old word, starting at the second character:
//     -lowercase the current character and store it in the new word storage
//   -add the new word to the output storage
//   -if you aren't at the last word:
//     -add a space to the output storage
//   clear the new word storage
// return the output storage

function capitalizeWords(string) {
  var newString = '';
  var stringArray = string.split(' ');
  for (var i = 0; i < stringArray.length; i++) {
    var oldWord = stringArray[i];
    var newWord = '';
    newWord += oldWord[0].toUpperCase();
    for (var k = 1; k < oldWord.length; k++) {
      newWord += oldWord[k].toLowerCase();
    }
    newString += newWord;
    if ([i] < stringArray.length - 1) {
      newString += ' ';
    }
    newWord = '';
  }
  return newString;
}

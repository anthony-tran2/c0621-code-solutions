/* exported numVowels */

// create output Storage
// for each character in the String, starting at the first one:
//   -if the character lowercase is equal to 'a':
//     increment the output storage by one
//   otherwise if the character lowercase is equal to 'e':
//     increment the output storage by one
//   otherwise if the character lowercase is equal to 'i':
//     increment the output storage by one
//   otherwise if the character lowercase is equal to 'o':
//     increment the output storage by one
//   otherwise if the character lowercase is equal to 'u':
//     increment the output storage by one
// return the output storage

function numVowels(string) {
  var numberOfVowels = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === 'a') {
      numberOfVowels++;
    } else if (string[i].toLowerCase() === 'e') {
      numberOfVowels++;
    } else if (string[i].toLowerCase() === 'i') {
      numberOfVowels++;
    } else if (string[i].toLowerCase() === 'o') {
      numberOfVowels++;
    } else if (string[i].toLowerCase() === 'u') {
      numberOfVowels++;
    }
  }
  return numberOfVowels;
}

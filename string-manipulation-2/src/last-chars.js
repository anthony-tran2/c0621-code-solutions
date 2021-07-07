/* exported lastChars */

// create output Storage
// if the length of the string is longer than the inputted length:
//   -for how many ever characters in the string you want, starting at the last character:
//     -add the current character to the output Storage
// otherwise:
//   -add the value of the string to the storage output
// return the output storage

function lastChars(length, string) {
  var newString = '';
  if (string.length > length) {
    for (var i = string.length - 1; i >= string.length - length; i--) {
      newString = string[i] + newString;
    }
  } else {
    newString += string;
  }
  return newString;
}

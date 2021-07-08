/* exported swapChars */

// create storage for output
// for each character in the String, strating at the first character:
//   -if the position is equal to first index:
//     -add the character at the second index to the output storage
//   -otherwise if the position is equal to the second index:
//     -add the character at the first index to the output storage
//   otherwise:
//     -add the character to the output storage
// return the output storage

function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += string[secondIndex];
    } else if (i === secondIndex) {
      newString += string[firstIndex];
    } else {
      newString += string[i];
    }
  }
  return newString;
}

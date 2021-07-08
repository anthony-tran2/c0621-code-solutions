/* exported truncate */

// create storage for output
// if the length of the string is longer than the length put in:
//   go through a certain number of characters based on the length, starting at the beginning of the string:
//     -add current character to output storage
// otherwise:
//   -add the string to the output storage
// add ... to the end of the output storage
// return output storage

function truncate(length, string) {
  var stringShortened = '';
  if (string.length > length) {
    for (var i = 0; i < length; i++) {
      stringShortened += string[i];
    }
  } else {
    stringShortened += string;
  }
  stringShortened += '...';
  return stringShortened;
}

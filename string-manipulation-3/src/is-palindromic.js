/* exported isPalindromic */

// create output Storage and set it equal to false
// create storage for word backwards
// create storage for normal word
// for each character in the String, starting at the last one:
//   if the character is not a space:
//     add the character to the backwards word storage
// for each character in the String, starting at the first one:
// if the character is not a space:
// add the character to the normal word storage
// if the string is equal to the word backwards:
//   set output storage to true
// return output storage

function isPalindromic(string) {
  var boolean = false;
  var reverseWord = '';
  var normalWord = '';
  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] !== ' ') {
      reverseWord += string[i];
    }
  }
  for (var c = 0; c < string.length; c++) {
    if (string[c] !== ' ') {
      normalWord += string[c];
    }
  }
  if (normalWord === reverseWord) {
    boolean = true;
  }
  return boolean;
}

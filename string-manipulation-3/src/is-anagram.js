/* exported isAnagram */

// create output Storage with a default value of true
// create storage for first string array
// create storage for second string array
// for each character in the first string, starting at the first one:
//   if the character is not a space:
//     add the character to the first string array storage
// for each character in the second string, starting at the first one:
//   if the character is not a space:
//     add the character to the second string array storage
// for each character in the first string array, starting at the first one:
//   if the first character in the second string array is equal to the current character in the first string array:
//     remove the current character in the first string array
//     remove the first character in the second string array
//     start the loop from the beginning of your new array
//   otherwise:
//     increment your starting value
// if the second string array is not empty:
//   set the output storage to false
// return output storage

function isAnagram(firstString, secondString) {
  var boolean = false;
  var firstStringArray = [];
  var secondStringArray = [];
  for (var firstStringIndex = 0; firstStringIndex < firstString.length; firstStringIndex++) {
    if (firstString[firstStringIndex] !== ' ') {
      firstStringArray.push(firstString[firstStringIndex]);
    }
  }
  for (var i = 0; i < secondString.length; i++) {
    if (secondString[i] !== ' ') {
      secondStringArray.push(secondString[i]);
    }
  }
  for (var firstStringArrayIndex = 0; firstStringArrayIndex < firstStringArray.length;) {
    if (secondStringArray[0] === firstStringArray[firstStringArrayIndex]) {
      firstStringArray.splice(firstStringArrayIndex, 1);
      secondStringArray.splice(0, 1);
      firstStringArrayIndex = 0;
    } else {
      firstStringArrayIndex++;
    }
  }
  if (firstStringArray[0] === undefined && secondStringArray[0] === undefined) {
    boolean = true;
  }
  return boolean;
}

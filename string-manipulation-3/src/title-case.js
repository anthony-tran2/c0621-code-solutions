/* exported titleCase */

// create output Storage
// create word Storage
// for each character in the titel, starting at the first one:
//   if the character is a space or a hyphen:
//     if the word length is greater than 3 characters
//       capitalize the first character in the word
//     add the character to the word storage
//     add the word to the output storage
//     clear the word output
//   otherwise:
//     add the character to the word storage
// return output

function titleCase(title) {
  var output = '';
  var words = title.split(' ');
  for (var c = 0; c < words.length; c++) {
    for (var a = 0; a < words[c].length; a++) {
      if (words[c][a] === '-') {
        words[c] = words[c].split('-');
      }
    }
  }
  var newWord = '';
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 1) {
      newWord = words[i][0][0].toUpperCase();
      for (var theRest = 1; theRest < words[i][0].length; theRest++) {
        newWord += words[i][0][theRest];
      }
      newWord += '-';
      newWord = words[i][1][0].toUpperCase();
      for (var theRestIndex = 1; theRestIndex < words[i][1].length; theRestIndex++) {
        newWord += words[i][1][theRestIndex];
      }
    } else {
      newWord = words[i][0].toUpperCase();
      for (var g = 1; g < words[i].length; g++) {
        newWord += words[i][g];
      }
    }
    output += newWord;
    newWord = '';
    if (i + 1 !== words.length) {
      output += ' ';
    }
  }
  return output;
}

// function titleCase(title) {
//   var output = '';
//   var word = '';
//   var capitalWord = '';
//   for (var i = 0; i < title.length; i++) {
//     if ((title[i] === ' ' && word.length > 2) || title[i] === '-') {
//       if (output === '') {
//         capitalWord += word[0].toUpperCase();
//         for (var o = 1; o < word.length; o++) {
//           capitalWord += word[o];
//         }
//         capitalWord += title[i];
//       } else if (output[output.length - 2] === ':') {
//         capitalWord += word[0].toUpperCase();
//         for (var g = 1; g < word.length; g++) {
//           capitalWord += word[g];
//         }
//         capitalWord += title[i];
//       } else if (word.length > 3 && title[i] === ' ') {
//         capitalWord += word[0].toUpperCase();
//         for (var c = 1; c < word.length; c++) {
//           capitalWord += word[c];
//         }
//         capitalWord += title[i];
//       } else if (title[i] === '-') {
//         capitalWord += word[0].toUpperCase();
//         for (var d = 1; d < word.length; d++) {
//           capitalWord += word[d];
//         }
//         if (capitalWord.toLowerCase() === 'javascript') {
//           capitalWord = 'JavaScript';
//         } else if (capitalWord.toLowerCase() === 'web') {
//           capitalWord = 'Web';
//         } else if (capitalWord.toLowerCase() === 'api') {
//           capitalWord = 'API';
//         } else if (capitalWord.toLowerCase() === 'javascript:') {
//           capitalWord = 'JavaScript:';
//         }
//         output += capitalWord;
//         capitalWord = '';
//       } else {
//         if (word.toLowerCase() === 'javascript') {
//           word = 'JavaScript';
//         } else if (word.toLowerCase() === 'web') {
//           word = 'Web';
//         } else if (word.toLowerCase() === 'api') {
//           word = 'API';
//         }
//         word += title[i];
//         output += word;
//       }
//       word = '';
//     } else {
//       word += title[i];
//     }
//   }
//   if (word.length > 3) {
//     capitalWord += word[0].toUpperCase();
//     for (var l = 1; l < word.length; l++) {
//       capitalWord += word[l];
//     }
//     if (capitalWord.toLowerCase() === 'javascript') {
//       capitalWord = 'JavaScript';
//     } else if (capitalWord.toLowerCase() === 'web') {
//       capitalWord = 'Web';
//     } else if (capitalWord.toLowerCase() === 'api') {
//       capitalWord = 'API';
//     }
//     output += capitalWord;
//   } else {
//     if (word.toLowerCase() === 'javascript') {
//       word = 'JavaScript';
//     } else if (word.toLowerCase() === 'web') {
//       word = 'Web';
//     } else if (word.toLowerCase() === 'api') {
//       word = 'API';
//     }
//     output += word;
//   }
//   return output;
// }

// function titleCase(title) {
//   var output = '';
//   var word = '';
//   var capitalWord = '';
//   for (var i = 0; i < title.length; i++) {
//     if (title[i] === ' ' || title[i] === '-') {
//       if (output === '') {
//         capitalWord += word[0].toUpperCase();
//         for (var o = 1; o < word.length; o++) {
//           capitalWord += word[o];
//         }
//         if (capitalWord.toLowerCase() === 'javascript') {
//           capitalWord = 'JavaScript';
//         } else if (capitalWord.toLowerCase() === 'web') {
//           capitalWord = 'Web';
//         } else if (capitalWord.toLowerCase() === 'api') {
//           capitalWord = 'API';
//         } else if (capitalWord.toLowerCase() === 'javascript:') {
//           capitalWord = 'JavaScript:';
//         }
//         capitalWord += title[i];
//         output += capitalWord;
//         capitalWord = '';
//       } else if (output[output.length - 2] === ':') {
//         capitalWord += word[0].toUpperCase();
//         for (var g = 1; g < word.length; g++) {
//           capitalWord += word[g];
//         }
//         if (capitalWord.toLowerCase() === 'javascript') {
//           capitalWord = 'JavaScript';
//         } else if (capitalWord.toLowerCase() === 'web') {
//           capitalWord = 'Web';
//         } else if (capitalWord.toLowerCase() === 'api') {
//           capitalWord = 'API';
//         }
//         capitalWord += title[i];
//         output += capitalWord;
//         capitalWord = '';
//       } else if (word.length > 3 && title[i] === ' ') {
//         capitalWord += word[0].toUpperCase();
//         for (var c = 1; c < word.length; c++) {
//           capitalWord += word[c];
//         }
//         if (capitalWord.toLowerCase() === 'javascript') {
//           capitalWord = 'JavaScript';
//         } else if (capitalWord.toLowerCase() === 'web') {
//           capitalWord = 'Web';
//         } else if (capitalWord.toLowerCase() === 'api') {
//           capitalWord = 'API';
//         } else if (capitalWord.toLowerCase() === 'javascript:') {
//           capitalWord = 'JavaScript:';
//         }
//         capitalWord += title[i];
//         output += capitalWord;
//         capitalWord = '';
//       } else if (title[i] === '-') {
//         capitalWord += word[0].toUpperCase();
//         for (var d = 1; d < word.length; d++) {
//           capitalWord += word[d];
//         }
//         output += capitalWord;
//         capitalWord = '';
//         if (capitalWord.toLowerCase() === 'javascript') {
//           capitalWord = 'JavaScript';
//         } else if (capitalWord.toLowerCase() === 'web') {
//           capitalWord = 'Web';
//         } else if (capitalWord.toLowerCase() === 'api') {
//           capitalWord = 'API';
//         }
//         capitalWord += title[i];
//         output += capitalWord;
//         capitalWord = '';
//       } else {
//         if (word.toLowerCase() === 'javascript') {
//           word = 'JavaScript';
//         } else if (word.toLowerCase() === 'web') {
//           word = 'Web';
//         } else if (word.toLowerCase() === 'api') {
//           word = 'API';
//         }
//         word += title[i];
//         output += word;
//       }
//       word = '';
//     } else {
//       word += title[i];
//     }
//   }
//   if (word.length > 3) {
//     capitalWord += word[0].toUpperCase();
//     for (var l = 1; l < word.length; l++) {
//       capitalWord += word[l];
//     }
//     if (capitalWord.toLowerCase() === 'javascript') {
//       capitalWord = 'JavaScript';
//     } else if (capitalWord.toLowerCase() === 'web') {
//       capitalWord = 'Web';
//     } else if (capitalWord.toLowerCase() === 'api') {
//       capitalWord = 'API';
//     }
//     output += capitalWord;
//   } else {
//     if (word.toLowerCase() === 'javascript') {
//       word = 'JavaScript';
//     } else if (word.toLowerCase() === 'web') {
//       word = 'Web';
//     } else if (word.toLowerCase() === 'api') {
//       word = 'API';
//     }
//     output += word;
//   }
//   return output;
// }

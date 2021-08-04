/* exported titleCase */

// lowercase the title
// create output storage and split the words by spaces into an Array
// for each word in the Array, starting at the first one
//   if the word is greater than 3 letters or the first word
//     split the word by '-'
//     if the 2nd word in the new array exists
//       set the current word to the correctly capitalized hyphened word
//     otherwise
//       set the current word to the correctly capitalized word
//   if the word lowercase is equal to one of the special case words:
//     set the word to the hard capitalized word
//   if the word has a colon as its last character
//     increment the counting value by one
//       correctly capitalize the word
// set the output storage back to a String
// return output storage

function titleCase(title) {
  title = title.toLowerCase();
  var words = title.split(' ');
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 3 || i === 0) {
      words[i] = words[i].split('-');
      if (words[i][1] !== undefined) {
        words[i] = words[i][0].charAt(0).toUpperCase() + words[i][0].slice(1) + '-' + words[i][1].charAt(0).toUpperCase() + words[i][1].slice(1);
      } else {
        words[i] = words[i][0].charAt(0).toUpperCase() + words[i][0].slice(1);
      }
    }
    if (words[i].toLowerCase() === 'javascript') {
      words[i] = 'JavaScript';
    } else if (words[i].toLowerCase() === 'api') {
      words[i] = 'API';
    } else if (words[i].toLowerCase() === 'web') {
      words[i] = 'Web';
    } else if (words[i].toLowerCase() === 'javascript:') {
      words[i] = 'JavaScript:';
    }
    if (words[i].charAt(words[i].length - 1) === ':') {
      i++;
      words[i] = words[i].split('-');
      if (words[i][1] !== undefined) {
        words[i] = words[i][0].charAt(0).toUpperCase() + words[i][0].slice(1) + '-' + words[i][1].charAt(0).toUpperCase() + words[i][1].slice(1);
      } else {
        words[i] = words[i][0].charAt(0).toUpperCase() + words[i][0].slice(1);
      }
    }
  }
  words = words.join(' ');
  return words;
}

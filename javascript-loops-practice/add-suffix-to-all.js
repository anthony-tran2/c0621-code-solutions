/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var wordWithSuffix = [];
  for (var i = 0; i < words.length; i++) {
    var newWord = words[i] + suffix;
    wordWithSuffix.push(newWord);
  }
  return wordWithSuffix;
}

/* exported capitalize */

// way to start a process
//   take the first character of your word and capitalize it and store the value in a new container
//   repeating action to lowercase all of the other characters in your word
//     statement that tells your repeating action where to start from
//     condition that tells your repeating action when to stop
//     statement that increases the value of your starting value
//       take the current character and lowercase it and then add it to the value inside your container and replace the current value in your container with your new value
//   return the value of your container

function capitalize(word) {
  var newWord = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    newWord += word[i].toLowerCase();
  }
  return newWord;
}

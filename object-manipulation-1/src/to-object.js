/* exported toObject */

// create storage for output
// add the first value of the array as your property and the second value of the array as the value of your property
// return output storage

function toObject(keyValuePair) {
  var newObject = {};
  newObject[keyValuePair[0]] = keyValuePair[1];
  return newObject;
}

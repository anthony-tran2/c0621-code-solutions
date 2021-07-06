/* exported getKeys */

// create storage for output
// for each property key in the Object:
//   -add the current property key to the output storage
// return the output storage

function getKeys(object) {
  var properties = [];
  for (var key in object) {
    properties.push(key);
  }
  return properties;
}

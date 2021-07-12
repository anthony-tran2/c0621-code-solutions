/* exported invert */

// create output storage
// if the object has no properties:
//   return output storage
// for each property:
//   set the property value as the class in your output storage and set your property its value
// return the output storage

function invert(source) {
  var output = {};
  if (source === {}) {
    return output;
  }
  for (var key in source) {
    output[source[key]] = key;
  }
  return output;
}

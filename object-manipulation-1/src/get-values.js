/* exported getValues */

// create storage for output
// for each property key in the object:
//   -take the value of the property key and add it to the storage output
// return the storage output

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}

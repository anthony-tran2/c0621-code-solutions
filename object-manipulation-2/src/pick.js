/* exported pick */

// create output Storage
// for each of your desired keys, starting at the first one:
//   for each property in your object:
//   if the value of the property is not strictly equal to undefined and if the property is equal to the current desired key:
//       add the current property with its value to your output Storage
// return output storage

function pick(source, keys) {
  var outputStorage = {};
  for (var i = 0; i < keys.length; i++) {
    for (var key in source) {
      if (source[key] !== undefined && key === keys[i]) {
        outputStorage[key] = source[key];
      }
    }
  }
  return outputStorage;
}

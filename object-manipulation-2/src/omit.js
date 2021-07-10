/* exported omit */

// create output Storage
// for property in source, starting at the first one:
//   for each item in your keys list starting at the first one:
//     if the current property is equal to current item in keys list:
//       delete the current property in the output storage
//       end the loop
//     add the current property with its value to your output Storage
// return output storage

function omit(source, keys) {
  var outputStorage = {};
  for (var prop in source) {
    for (var i = 0; i < keys.length; i++) {
      if (prop === keys[i]) {
        delete outputStorage[prop];
        break;
      }
      outputStorage[prop] = source[prop];
    }
  }
  return outputStorage;
}

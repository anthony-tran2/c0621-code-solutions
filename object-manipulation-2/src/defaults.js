/* exported defaults */

// make temp storage for target
// for each property in target object:
//   add the current target property and value to the temp target storage
// for each key in source:
//   add the source properties and their value to the target
// for each property in target storage:
//   for each property in source:
//     if the current property of source is equal to the current property of the temp target storage:
//       set the current target property equal to the value of the same property in temp target storage

function defaults(target, source) {
  var tempTarget = {};
  for (var key in target) {
    tempTarget[key] = target[key];
  }
  for (var key in source) {
    target[key] = source[key];
  }
  for (var prop in tempTarget) {
    for (var key in source) {
      if (key === prop) {
        target[key] = tempTarget[key];
      }
    }
  }
}

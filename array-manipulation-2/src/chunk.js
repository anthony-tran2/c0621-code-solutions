/* exported chunk */

// create output Storage
// create chunk output
//  for how many ever items the size value is in the array, starting at the first one:
//   if chunk item list length is less than count:
//     add current item to chunk output
//   otherwise if chunk item list length is equal to count:
//     add chunk output to output storage
//     reset chunk output
//   otherwise:
//     create remainder output
//     add remainder to output to output storage
// return output storage

// function chunk(array, size) {
//   var newArray = [];
//   var newChunk = [];
//   for (var i = 0; i < array.length; i++) {
//     if (newChunk.length < size) {
//       newChunk.push(array[i]);
//     } else if (newChunk.length === size) {
//       newArray.push(newChunk);
//       newChunk = [];
//     }
//   }
//   return newArray;
// }

// function chunk(array, size) {
//   var newArray = [];
//   for (var i = 0; i < array.length; i = i + size) {
//     newArray.push(array.slice(i, i + size));
//   }
//   return newArray;
// }

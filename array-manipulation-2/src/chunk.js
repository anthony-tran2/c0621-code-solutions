/* exported chunk */

// create output Storage
// create chunk output
// for each item in the array, starting at the first one:
//   push the current item into the chunk storage
//   if chunk item list length is equal to count:
//     add chunk output to output storage
//     reset chunk output
// if the chunk output still has something in it:
//   add the chunk output to the storage output
// return output storage

function chunk(array, size) {
  var newArray = [];
  var newChunk = [];
  for (var i = 0; i < array.length; i++) {
    newChunk.push(array[i]);
    if (newChunk.length === size) {
      newArray.push(newChunk);
      newChunk = [];
    }
  }
  if (newChunk.length > 0) {
    newArray.push(newChunk);
  }
  return newArray;
}

// Easy way:

// create output Storage
// for items in the list increasing by the size of the chunk, starting at the first:
//   add a chunk to your storage output
// return output storage

// function chunk(array, size) {
//   var newArray = [];
//   for (var i = 0; i < array.length; i = i + size) {
//     newArray.push(array.slice(i, i + size));
//   }
//   return newArray;
// }

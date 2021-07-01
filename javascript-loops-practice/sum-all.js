/* exported sumAll */

function sumAll(numbers) {
  var sum = null;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

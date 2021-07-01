/* exported oddOrEven */

function oddOrEven(numbers) {
  var numbersArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
      numbersArray.push('even');
    } else {
      numbersArray.push('odd');
    }
  }
  return numbersArray;
}

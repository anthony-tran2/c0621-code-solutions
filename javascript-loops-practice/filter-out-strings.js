/* exported filterOutStrings */

function filterOutStrings(values) {
  var valuesExceptString = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== '' + values[i]) {
      valuesExceptString.push(values[i]);
    }
  }
  return valuesExceptString;
}

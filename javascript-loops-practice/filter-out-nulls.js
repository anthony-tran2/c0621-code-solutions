/* exported filterOutNulls */

function filterOutNulls(values) {
  var valuesExceptNull = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      valuesExceptNull.push(values[i]);
    }
  }
  return valuesExceptNull;
}

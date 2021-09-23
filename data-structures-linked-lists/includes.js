/* exported includes */

function includes(list, value) {
  let copy = list;
  while (copy.next) {
    if (copy.data === value) return true;
    copy = copy.next;
  }
  if (copy.data === value) return true;
  return false;
}

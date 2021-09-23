/* exported getLength */

function getLength(list) {
  let copy = list;
  let counter = 0;
  while (copy) {
    counter++;
    copy = copy.next;
  }
  return counter;
}

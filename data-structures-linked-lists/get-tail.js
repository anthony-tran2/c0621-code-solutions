/* exported getTail */

function getTail(list) {
  let tail = null;
  while (list) {
    tail = list.data;
    list = list.next;
  }
  return tail;
}

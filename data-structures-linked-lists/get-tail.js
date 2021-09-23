/* exported getTail */

function getTail(list) {
  let copy = list;
  let tail = null;
  while (copy) {
    tail = copy.data;
    copy = copy.next;
  }
  return tail;
}

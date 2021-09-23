/* exported swapFront */

function swapFront(list) {
  if (!list.next) return list;
  const head = list.data;
  list.data = list.next.data;
  list.next.data = head;
  return list;
}

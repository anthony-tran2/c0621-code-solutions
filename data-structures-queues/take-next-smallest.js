/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (typeof queue.peek() !== 'undefined') {
    let first = queue.dequeue();
    if (typeof queue.peek() === 'undefined') return first;
    let next = queue.peek();
    while (next < first) {
      queue.enqueue(first);
      first = queue.dequeue();
      next = queue.peek();
    }
    return first;
  }
}

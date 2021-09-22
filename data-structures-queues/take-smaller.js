/* exported takeSmaller */

function takeSmaller(queue) {
  if (typeof queue.peek() !== 'undefined') {
    const first = queue.dequeue();
    if (typeof queue.peek() === 'undefined') return first;
    if (first < queue.peek() || first === queue.peek()) {
      queue.enqueue(queue.dequeue());
      return first;
    }
    if (first > queue.peek()) {
      queue.enqueue(first);
      return queue.dequeue();
    }
  }
}

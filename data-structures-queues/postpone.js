/* exported postpone */

function postpone(queue) {
  if (typeof queue.peek() !== 'undefined') {
    const value = queue.dequeue();
    return queue.enqueue(value);
  }
}

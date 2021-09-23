/* exported take2nd */

function take2nd(queue) {
  if (typeof queue.peek() !== 'undefined') {
    const first = queue.dequeue();
    if (typeof queue.peek() === 'undefined') return first; else {
      queue.enqueue(first);
      return queue.dequeue();
    }
  }
}

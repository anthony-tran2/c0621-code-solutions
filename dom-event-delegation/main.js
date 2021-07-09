var $taskList = document.querySelector('.container');

function logEvent(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var anscestorEl = event.target.closest('.task-list-item');
    console.log('Closest .task-list-item:', anscestorEl);
    anscestorEl.remove();
  }
}

$taskList.addEventListener('click', logEvent);

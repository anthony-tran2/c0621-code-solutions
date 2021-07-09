var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

function tabChange(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabs.length; i++) {
      if ($tabs[i] === event.target) {
        $tabs[i].className += ' ' + 'active';
      } else {
        $tabs[i].className = 'tab';
      }
    }
    var $dataViewValue = event.target.getAttribute('data-view');
    for (var d = 0; d < $view.length; d++) {
      if ($view[d].getAttribute('data-view') === $dataViewValue) {
        $view[d].className = 'view';
      } else {
        $view[d].className += 'view hidden';
      }
    }
  }
}

$tabContainer.addEventListener('click', tabChange);

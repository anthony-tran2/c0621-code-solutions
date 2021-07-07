var $lightBulb = document.querySelector('button');
var $background = document.querySelector('div.row');

$lightBulb.addEventListener('click', function (event) {
  if ($lightBulb.className === 'lightBulb-on') {
    $lightBulb.className = 'lightBulb-off';
    $background.className = 'row center background-color-dark';
  } else if ($lightBulb.className === 'lightBulb-off') {
    $lightBulb.className = 'lightBulb-on';
    $background.className = 'row center background-color-light';
  }
});

var $openModalButton = document.querySelector('button.modal-button');
var $noButton = document.querySelector('button.no-button');
var $popUp = document.querySelector('div.position-fixed');

$openModalButton.addEventListener('click', function (event) {
  $popUp.className = 'row center position-fixed tint';
});

$noButton.addEventListener('click', function (event) {
  $popUp.className += ' ' + 'display-none';
});

var $characters = document.querySelectorAll('span');
var $webPage = document.querySelector('body');
var i = 0;

$webPage.addEventListener('keydown', function (event) {
  if (event.key === $characters[i].textContent) {
    $characters[i].className = 'correct-character';
    $characters[i + 1].className = 'character-underline';
    i++;
  } else {
    $characters[i].className = '';
    $characters[i].className += 'character-underline';
    $characters[i].className += ' ' + 'incorrect-character';
  }
});

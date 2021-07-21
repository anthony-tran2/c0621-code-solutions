var $h1 = document.querySelector('h1');
setInterval(countdown, 1000);
var timer = 4;

function countdown(second) {
  timer -= 1;
  if ($h1.textContent === '1') {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(1);
  } else {
    $h1.textContent = timer;
  }
}

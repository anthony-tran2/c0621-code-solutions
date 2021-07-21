var $h1 = document.querySelector('h1');
var intervalID = setInterval(countdown, 1000);
var timer = 4;

function countdown(second) {
  timer -= 1;
  if ($h1.textContent === '1') {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  } else {
    $h1.textContent = timer;
  }
}

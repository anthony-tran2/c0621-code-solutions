let counter = 0;
let nextPosition = 1;
const $allImages = document.querySelectorAll('img');
const $allDots = document.querySelectorAll('i.fa-circle');
const dotDiv = document.querySelector('i.fa-circle').closest('div.row');
const leftArr = document.querySelector('i.fa-chevron-left');
const rightArr = document.querySelector('i.fa-chevron-right');

const position = elements => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].setAttribute('position', `${nextPosition}`);
    if (nextPosition === elements.length) nextPosition = 1; else nextPosition++;
  }
};

const imgRotation = () => {
  $allImages[counter].classList.toggle('hidden');
  $allDots[counter].classList.toggle('fas');
  $allDots[counter].classList.toggle('far');
  if (counter + 1 === $allDots.length) counter = 0; else counter++;
  $allImages[counter].classList.toggle('hidden');
  $allDots[counter].classList.toggle('fas');
  $allDots[counter].classList.toggle('far');
};

const imgSelection = dot => {
  clearInterval(intervalId);
  for (let i = 0; i < $allDots.length; i++) {
    if ($allDots[i] === dot) {
      $allDots[i].className = 'fas fa-circle dot-column';
      $allImages[i].className = '';
    } else {
      $allDots[i].className = 'far fa-circle dot-column';
      $allImages[i].className = 'hidden';
    }
  }
  counter = parseInt(dot.getAttribute('position')) - 1;
  intervalId = setInterval(imgRotation, 3000);
};

let intervalId = setInterval(imgRotation, 3000);

position($allImages);
position($allDots);
dotDiv.addEventListener('click', event => imgSelection(event.target));
leftArr.addEventListener('click', () => {
  clearInterval(intervalId);
  $allImages[counter].classList.toggle('hidden');
  $allDots[counter].classList.toggle('fas');
  $allDots[counter].classList.toggle('far');
  if (counter === 0) counter = $allDots.length - 1; else counter--;
  $allImages[counter].classList.toggle('hidden');
  $allDots[counter].classList.toggle('fas');
  $allDots[counter].classList.toggle('far');
  intervalId = setInterval(imgRotation, 3000);
});
rightArr.addEventListener('click', () => {
  clearInterval(intervalId);
  imgRotation();
  intervalId = setInterval(imgRotation, 3000);
});

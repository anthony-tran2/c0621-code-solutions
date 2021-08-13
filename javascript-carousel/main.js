let counter = 0;
const $allImages = document.querySelectorAll('img');
const $allDots = document.querySelectorAll('i.fa-circle');
const dot1 = document.querySelector('i[position="1"]');
const dot2 = document.querySelector('i[position="2"]');
const dot3 = document.querySelector('i[position="3"]');
const dot4 = document.querySelector('i[position="4"]');
const dot5 = document.querySelector('i[position="5"]');
const leftArr = document.querySelector('i.fa-chevron-left');
const rightArr = document.querySelector('i.fa-chevron-right');

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

dot1.addEventListener('click', () => imgSelection(dot1));
dot2.addEventListener('click', () => imgSelection(dot2));
dot3.addEventListener('click', () => imgSelection(dot3));
dot4.addEventListener('click', () => imgSelection(dot4));
dot5.addEventListener('click', () => imgSelection(dot5));
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

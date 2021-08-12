let counter = 0;
const $allImages = document.querySelectorAll('img');
const $allDots = document.querySelectorAll('i.fa-circle');
// const dot1 = document.querySelector('i[position="1"]');
// const dot2 = document.querySelector('i[position="2"]');
// const dot3 = document.querySelector('i[position="3"]');
// const dot4 = document.querySelector('i[position="4"]');
// const dot5 = document.querySelector('i[position="5"]');
// const leftArr = document.querySelector('')

const imgRotation = () => {
  $allImages[counter].classList.toggle('hidden');
  $allDots[counter].classList.toggle('fas');
  $allDots[counter].classList.toggle('far');
  if (counter + 1 === $allDots.length) counter = 0; else counter++;
  $allImages[counter].classList.toggle('hidden');
  $allDots[counter].classList.toggle('fas');
  $allDots[counter].classList.toggle('far');
};

const intervalId = setInterval(imgRotation, 3000);

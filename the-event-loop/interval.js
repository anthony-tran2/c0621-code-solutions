let currentCount = 3;

const countdown = () => {
  if (currentCount === 0) {
    clearInterval(intervalID);
    console.log('Blast off!');
  } else {
    console.log(currentCount);
    currentCount--;
  }
};

const intervalID = setInterval(countdown, 1000);

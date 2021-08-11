console.log('Hello, just wait a minute...');

const thanks = () => {
  clearTimeout(timeoutID);
  return console.log('Thanks for waiting!');
};

var timeoutID = setTimeout(thanks, 2000);

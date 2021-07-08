function handleFocus(event) {
  console.log('focus');
  console.log(event.target.name);
}
function handleBlur(event) {
  console.log('blur');
  console.log(event.target.name);
}
function handleInput(event) {
  console.log(event.target.name, event.target.value);
}

var usernameInput = document.querySelector('#user-name');
var emailInput = document.querySelector('#user-email');
var messageText = document.querySelector('#user-message');

usernameInput.addEventListener('focus', handleFocus);
usernameInput.addEventListener('blur', handleBlur);
usernameInput.addEventListener('input', handleInput);

emailInput.addEventListener('focus', handleFocus);
emailInput.addEventListener('blur', handleBlur);
emailInput.addEventListener('input', handleInput);

messageText.addEventListener('focus', handleFocus);
messageText.addEventListener('blur', handleBlur);
messageText.addEventListener('input', handleInput);

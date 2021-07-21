function helloThere() {
  document.querySelector('h1').textContent = 'Hello There';
}

setTimeout(helloThere, 2 * 1000);

// window.addEventListener('DOMContentLoaded', setTimeout(helloThere, 2 * 1000));

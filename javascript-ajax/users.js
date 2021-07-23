var $ul = document.querySelector('#user-list');

function getUserData(user) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    for (var i = 0; i < xhr.response.length; i++) {
      var $newLi = document.createElement('li');
      $newLi.textContent = xhr.response[i].name;
      $ul.appendChild($newLi);
    }
  });
  xhr.send();
}

getUserData();

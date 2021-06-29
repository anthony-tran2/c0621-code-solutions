function convertMinutesToSeconds(minutes) {
  var minutesToSeconds = minutes * 60;
  return minutesToSeconds;
}

var seconds = convertMinutesToSeconds(8);
console.log('seconds:', seconds);

function greet(name) {
  var greetPerson = 'Hey, ' + name;
  return greetPerson;
}

var greeting = greet('Anthony');
console.log('greeting:', greeting);

function getArea(width, height) {
  var total = width * height;
  return total;
}

var area = getArea(23, 53);
console.log('area:', area);

function getFirstName(person) {
  var name = person.firstName;
  return name;
}

var firstName = getFirstName({ firstName: 'Anthony', lastName: 'Tran' });
console.log('firstName:', firstName);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastItem = array[lastIndex];
  return lastItem;
}

var lastElement = getLastElement(['gas', 'car', 'headlights', 'whoopie cushion']);
console.log('lastElement:', lastElement);

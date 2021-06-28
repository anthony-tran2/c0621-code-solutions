var student = {
  firstName: 'Anthony',
  lastName: 'Tran',
  age: 20
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Panda Express Counter Help';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation', student.previousOccupation);

var vehicle = {
  make: 'Honda',
  model: 'Accord',
  year: '2005'
};

vehicle['color'] = 'gray';
vehicle['isConvertible'] = 'false';

console.log('value of vehicle[\'color\']:', vehicle['color']);
console.log('value of vehicle[\'isConvertible\']:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Lucky',
  type: 'poodle'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);

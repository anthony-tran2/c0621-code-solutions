var bookshelf = [
  {
    isbn: '3463643LKHJ45HYHLK',
    title: 'The Lightning Thief',
    author: 'Rick Riordan'
  },
  {
    isbn: '34JKH5325JKH325KLHJ',
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling'
  },
  {
    isbn: '25J6KH5JH64JK2356H',
    title: 'The Griffin\'s Feather',
    author: 'Cornelia Funke'
  }
];
console.log('bookshelf:', bookshelf);
console.log('typeof bookshelf:', typeof bookshelf);

var bookshelfJSON = JSON.stringify(bookshelf);
console.log('bookshelfJSON:', bookshelfJSON);
console.log('typeof bookshelfJSON:', typeof bookshelfJSON);

var studentsJSON = '[{"id": "5744354356436","name":"Anthony"},{"id":"5794576347","name":"Michael"},{"id":"23453644","name":"Jackson"}]';
console.log('studentsJSON:', studentsJSON);
console.log('typeof studentsJSON:', typeof studentsJSON);

var students = JSON.parse(studentsJSON);
console.log('students:', students);
console.log('typeof students:', typeof students);

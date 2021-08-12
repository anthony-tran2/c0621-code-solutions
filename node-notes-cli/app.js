const fs = require('fs');
const dataObject = require('./data.json');

const notes = dataObject.notes;
if (process.argv[2] === 'read') {
  for (const key in notes) {
    console.log(`${key}: ${notes[key]}`);
  }
} else if (process.argv[2] === 'create') {
  notes[`${dataObject.nextId}`] = process.argv[3];
  dataObject.nextId = dataObject.nextId + 1;
} else if (process.argv[2] === 'delete') {
  delete notes[process.argv[3]];
} else if (process.argv[2] === 'update') {
  notes[`${process.argv[3]}`] = process.argv[4];
}
const dataJSON = JSON.stringify(dataObject, null, 2);
fs.writeFile('./data.json', dataJSON, 'utf8', err => {
  if (err) throw err;
});

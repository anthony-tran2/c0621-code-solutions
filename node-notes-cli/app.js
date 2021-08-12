const fs = require('fs');

fs.readFile('./data.json', 'utf8', (err, data) => {
  if (err) throw err;
  const dataObject = JSON.parse(data);
  const notes = dataObject.notes;
  if (process.argv[2] === 'read') {
    for (const key in notes) {
      console.log(`${key}: ${notes[key]}`);
    }
  } else if (process.argv[2] === 'create') {
    notes[`${dataObject.nextId}`] = process.argv[3];
    dataObject.nextId = dataObject.nextId + 1;
  }
  const dataJSON = JSON.stringify(dataObject);
  fs.writeFile('./data.json', dataJSON, 'utf8', err => {
    if (err) throw err;
  });
});

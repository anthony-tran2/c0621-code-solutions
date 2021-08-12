const fs = require('fs');

let dataJSON = '';
let dataObject = null;

if (process.argv[2] === 'read') {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    dataJSON = data;
    dataObject = JSON.parse(dataJSON);
    const notes = dataObject.notes;
    for (const key in notes) {
      console.log(`${key}: ${notes[key]}`);
    }
  });
}

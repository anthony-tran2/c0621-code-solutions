const fs = require('fs');

let dataCopy = null;

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) throw err;
  dataCopy = data;
  fs.writeFile(process.argv[3], dataCopy, err => {
    if (err) throw err;
  });

});

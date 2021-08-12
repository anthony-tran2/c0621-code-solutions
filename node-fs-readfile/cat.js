const fs = require('fs');

const output = [];
let counter = 0;
for (let i = 2; i < process.argv.length; i++) {
  fs.readFile(process.argv[i], 'utf8', (err, data) => {
    if (err) throw err;
    output.push(data);
    counter++;
    if (counter === process.argv.length - 2) {
      console.log(output);
    }
  });

}

const fs = require('fs');

const output = [];
let counter = 0;
for (let i = 2; i < process.argv.length; i++) {
  output.push(process.argv[i]);
  fs.readFile(process.argv[i], 'utf8', (err, data) => {
    if (err) throw err;
    output.forEach((value, index) => {
      if (value === process.argv[i]) {
        output.splice(index, 1, data);
      }
    });
    counter++;
    if (counter === process.argv.length - 2) {
      console.log(output.join(`
`));
    }
  });

}

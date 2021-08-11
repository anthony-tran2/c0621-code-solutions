const fs = require('fs');

const output = [];

for (let i = 2; i < process.argv.length; i++) {
  output.push(process.argv[i]);
  fs.readFile(process.argv[i], 'utf8', (err, data) => {
    if (err) throw err;
    output.forEach((value, index) => {
      if (value === process.argv[i]) {
        output[index] = 'wow';
      }
    });
  });

}

// output.join('');

console.log(output);

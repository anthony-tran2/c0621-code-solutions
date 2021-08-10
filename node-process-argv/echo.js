const process = require('process');

process.argv.forEach((val, index) => {
  if (index === 2) console.log(val);
});

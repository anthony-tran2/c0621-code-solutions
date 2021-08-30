const express = require('express');
const path = require('path');
const app = express();

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

const publicDirPath = path.join(__dirname, 'public');
const expressStatic = express.static(publicDirPath);

app.use(expressStatic);

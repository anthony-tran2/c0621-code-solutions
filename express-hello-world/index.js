const express = require('express');
const app = express();

app.use((req, res) => {
  res.send('<h1>Wowzers</h1>');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening!');
});

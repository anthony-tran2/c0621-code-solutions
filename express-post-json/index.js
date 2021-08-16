const express = require('express');
const app = express();
let nextId = 1;

const grades = {};

app.listen(3000, () => {
// eslint-disable-next-line no-console
  console.log('Server is runnning!');
});

app.get('/api/grades', (req, res) => {
  const output = [];
  for (const key in grades) {
    output.push(grades[key]);
  }
  res.json(output);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  res.status(201).json(grades[nextId]);
  nextId++;
});

const express = require('express');
const app = express();
const fs = require('fs');
const data = require('./data.json');

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server has started!');
});

app.get('/api/grades', (req, res) => {
  const array = [];
  for (const key in data.notes) {
    array.push(data.notes[key]);
  }
  res.status(200).json(array);
});

app.get('/api/grades/:id', (req, res) => {
  if (parseInt(req.params.id) >= 0) {
    if (data.notes[req.params.id]) {
      res.status(200).json(data.notes[req.params.id]);
    } else {
      const errorMessage = {
        error: `cannot find note with id ${req.params.id}`
      };
      res.status(404).send(errorMessage);
    }
  } else {
    const errorMessage = {
      error: 'id must be a positive integer'
    };
    res.status(400).json(errorMessage);
  }
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const newNote = req.body;
  if (newNote.content) {
    data.notes[data.nextId] = newNote;
    data.notes[data.nextId].id = data.nextId;
    data.nextId++;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8', err => {
      if (err) {
        const errorMessage = {
          error: 'An unexpected error occured.'
        };
        res.status(500).json(errorMessage);
      } else res.status(201).json(data.notes[data.nextId - 1]);
    });
  } else {
    const errorMessage = {
      error: 'content is a required field'
    };
    res.status(400).json(errorMessage);
  }
});

app.delete('/api/grades/:id', (req, res) => {
  if (parseInt(req.params.id) >= 0) {
    if (data.notes[req.params.id]) {
      delete data.notes[req.params.id];
      fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8', err => {
        if (err) {
          const errorMessage = {
            error: 'An unexpected error occured.'
          };
          res.status(500).json(errorMessage);
        } else res.sendStatus(204);
      });
    } else {
      const errorMessage = {
        error: `cannot find note with id ${req.params.id}`
      };
      res.status(404).send(errorMessage);
    }
  } else {
    const errorMessage = {
      error: 'id must be a positive integer'
    };
    res.status(400).json(errorMessage);
  }
});

app.put('/api/grades/:id', (req, res) => {
  if (parseInt(req.params.id) >= 0 && req.body.content) {
    if (data.notes[req.params.id]) {
      data.notes[req.params.id].content = req.body.content;
      fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8', err => {
        if (err) {
          const errorMessage = {
            error: 'An unexpected error occured.'
          };
          res.status(500).json(errorMessage);
        } else res.status(200).json(data.notes[req.params.id]);
      });
    } else {
      const errorMessage = {
        error: `cannot find note with id ${req.params.id}`
      };
      res.status(404).send(errorMessage);
    }
  } else {
    if (parseInt(req.params.id) >= 0) {
      const errorMessage = {
        error: 'content is a required field'
      };
      res.status(400).json(errorMessage);
    } else {
      const errorMessage = {
        error: 'id must be a positive integer'
      };
      res.status(400).json(errorMessage);
    }
  }
});

const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const express = require('express');
const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server has started!');
});

app.use(express.json());

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
     from "grades"
  `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  const newGrade = req.body;
  if (newGrade && Object.keys(newGrade).length === 0 && newGrade.constructor === Object) {
    res.status(400).json({
      error: 'name, course, and score are required fields'
    });
    return;
  } else if (!newGrade.name) {
    res.status(400).json({
      error: 'name is a required field'
    });
    return;
  } else if (!newGrade.course) {
    res.status(400).json({
      error: 'course is a required field'
    });
    return;
  } else if (!newGrade.score) {
    res.status(400).json({
      error: 'score is a required field'
    });
    return;
  } else if (!Number.isInteger(newGrade.score) || newGrade.score > 100 || newGrade.score < 0) {
    res.status(400).json({
      error: 'score must be a positive integer between 0 and 100'
    });
    return;
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
  `;
  const values = [newGrade.name, newGrade.course, newGrade.score];
  db.query(sql, values)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId);
  const newValues = req.body;
  if (gradeId < 1) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  } else if (newValues && Object.keys(newValues).length === 0 && newValues.constructor === Object) {
    res.status(400).json({
      error: 'name, course, and score are required fields'
    });
    return;
  } else if (!newValues.name) {
    res.status(400).json({
      error: 'name is a required field'
    });
    return;
  } else if (!newValues.course) {
    res.status(400).json({
      error: 'course is a required field'
    });
    return;
  } else if (!newValues.score) {
    res.status(400).json({
      error: 'score is a required field'
    });
    return;
  } else if (!Number.isInteger(newValues.score) || newValues.score > 100 || newValues.score < 0) {
    res.status(400).json({
      error: 'score must be a positive integer between 0 and 100'
    });
    return;
  }
  const sql = `
 update "grades"
    set "name" = $1,
        "course" = $2,
        "score" = $3
  where "gradeId" = $4
  returning *;
  `;
  const values = [newValues.name, newValues.course, newValues.score, gradeId];
  db.query(sql, values)
    .then(result => {
      if (!result.rows[0]) {
        res.status(404).json({
          error: `cannot find grade with id ${req.params.gradeId}`
        });
        return;
      }
      res.status(200).json(result.rows[0]);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({
        error: 'An unexpected error has occured.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId);
  if (gradeId < 1) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }
  const sql = `
 delete from "grades"
  where "gradeId" = $1
  returning *;
  `;
  const values = [gradeId];
  db.query(sql, values)
    .then(result => {
      if (!result.rows[0]) {
        res.status(404).json({
          error: `cannot find grade with id ${req.params.gradeId}`
        });
        return;
      }
      res.sendStatus(204);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({
        error: 'An unexpected error has occured.'
      });
    });
});

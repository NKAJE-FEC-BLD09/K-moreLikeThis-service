const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const getMovie = require('../db/queries/getMovie.js');

const app = express();
const port = 8153;

app.listen(port, () => console.log('Listening on port ', port));
app.use(cors());
app.use(bp.json());

app.get('/movies/:movieID', (req, res) => {
  getMovie(req.params.movieID)
  .then ( data => {
    res.status(201).send(data);
  })
  .catch((err) => {
    console.log(err);
  });
});


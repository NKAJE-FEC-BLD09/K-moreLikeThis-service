const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const Movie = require('../db/MovieSchema');

const app = express();
const port = 8153;

app.listen(port, () => console.log('Listening on port ', port));
app.use(cors());
app.use(bp.json());
app.use(express.static('public'));

app.get('/movies/:movieID', (req, res) => {
  Movie.findOne({ movieID: req.params.movieID })
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      throw err;
    });
});

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/IMDb', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Connection made to database \'IMDb\''));

const movieSchema = new mongoose.Schema({
  movieName: String,
  movieID: Number,
  year: Number,
  image: String,
  rating: String,
  reviewScore: Number,
  description: String,
  director: String,
  stars: Array,
  similarMovies: Array,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

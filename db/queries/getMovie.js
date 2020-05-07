const Movie = require('../MovieSchema.js');

const getMovie = (id) => {
  return Movie.findOne({'movieID': id});
}

module.exports = getMovie;
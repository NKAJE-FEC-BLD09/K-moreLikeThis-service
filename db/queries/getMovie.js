const Movie = require('../MovieSchema.js');

const getMovie = (id) => {
  if (typeof id !== 'number') {
    return false;
  }
  return Movie.findOne({'movieID': id});
}

module.exports = getMovie;
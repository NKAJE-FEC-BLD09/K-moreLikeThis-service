//decided this was not worth the work to make it work
//only needs one line in the index.js server file

const Movie = require('../MovieSchema.js');
const Promise = require('bluebird');

const getMovie = (id) => {
  if (typeof id !== 'number') {
    return false;
  }
  return Movie.findOne({'movieID': id});
}

const getMoviePromisify = Promise.promisify(getMovie);

module.exports = getMoviePromisify;
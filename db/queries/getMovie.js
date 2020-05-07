const Movie = require('../MovieSchema.js');

const getMovie = (id) => {
  Movie.findOne({'movieID': '3'}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      return data;
    }
  })
}

module.exports = getMovie;
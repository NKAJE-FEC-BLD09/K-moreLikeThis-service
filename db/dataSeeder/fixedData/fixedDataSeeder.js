const Movie = require('../../MovieSchema.js');

const fixedDataSeeder = (movieData) => {
  movieData.forEach((movie) => {
    const seed = new Movie(movie);
    seed.save();
  });
};

module.exports = fixedDataSeeder;

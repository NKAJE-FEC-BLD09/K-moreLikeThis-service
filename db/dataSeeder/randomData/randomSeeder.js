const faker = require('faker');
const Movie = require('../../MovieSchema.js');
const ratingGen = require('./ratingGenerator.js');
const descriptonGen = require('./descriptionGenerator.js');
const starsSeeder = require('./starsSeeder.js');
const similarMoviesSeeder = require('./similarMoviesSeeder.js');
const randomYear = require('./randomYear.js');
const imageSeeder = require('./imageSeeder.js');


const randomSeeder = () => {
  for (let i = 6; i <= 100; i++) {
    const film = new Movie({
      movieName: faker.fake('{{name.firstName}} {{name.lastName}}'),
      movieID: i,
      year: randomYear(),
      image: imageSeeder(),
      rating: ratingGen(),
      reviewScore: Math.floor(Math.random() * 11),
      description: descriptonGen(),
      director: faker.fake('{{name.firstName}} {{name.lastName}}'),
      stars: starsSeeder(),
      similarMovies: similarMoviesSeeder(),
    });
    film.save();
  }
};

module.exports = randomSeeder;

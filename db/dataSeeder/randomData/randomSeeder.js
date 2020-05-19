const faker = require('faker');
const Movie = require('../../MovieSchema.js');
const ratingGen = require('./ratingGenerator.js');
const descriptonGen = require('./descriptionGenerator.js');
const starsSeeder = require('./starsSeeder.js');
const similarMoviesSeeder = require('./similarMoviesSeeder.js');
const randomYear = require('./randomYear.js');
const imageSeeder = require('./imageSeeder.js');


const randomSeeder = () => {
  for (let i = 12; i <= 100; i += 1) {
    const film = new Movie({
      movieName: faker.fake('{{name.title}}'),
      movieID: i,
      year: randomYear(),
      image: imageSeeder(),
      rating: ratingGen(),
      reviewScore: Math.floor(Math.random() * 11),
      description: descriptonGen(),
      director: faker.fake('{{name.firstName}} {{name.lastName}}'),
      stars: starsSeeder(),
      similarMovies: similarMoviesSeeder(),
      genre: faker.fake('{{lorem.word}}'),
    });
    film.save();
  }
};

module.exports = randomSeeder;

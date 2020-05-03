const Movie = require('../MovieSchema.js');
const faker = require('faker');


const seeder = () => {
  for (let i = 6; i <= 100; i++) {
    const film = new Movie({
      movieName: faker.fake('{{name.firstName}} {{name.lastName}}'),
      movieID: i,
      rating: /*random rating generator*/,
      reviewScore: Math.floor(Math.random() * 11),
      description: String,
      director: String,
      stars: Array,
      similarMovies: Array
    });
    film.save();
  }
}

module.export = seeder;
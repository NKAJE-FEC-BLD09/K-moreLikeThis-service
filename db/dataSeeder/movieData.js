const similarMoviesSeeder = require('./similarMoviesSeeder.js');

const movieData = [{
  movieName: 'Rubber',
  movieID: 1,
  rating: 'R',
  reviewScore: 5.8,
  description: 'A homicidal car tire, discovering it has destructive psionic power, sets its sights on a desert town once a mysterious woman becomes its obsession.',
  director: 'Quentin Dupieux',
  stars: ['Stephen Spinella', 'Roxane Mesquida', 'Wings Hauser'],
  similarMovies: similarMoviesSeeder()
},
{
  movieName: 'McLintock!',
  movieID: 2,
  rating: 'Passed',
  reviewScore: 7.2,
  description: 'Wealthy rancher G.W. McLintock uses his power and influence in the territory to keep the peace between farmers, ranchers, land-grabbers, Indians and corrupt government officials.',
  director: 'Anderw V. McLeaglen',
  stars: ['John Wayne', 'Maureen O\'Hara', 'Patrick Wayne'],
  similarMovies: similarMoviesSeeder()
},
{
  movieName: 'Zoolander',
  movieID: 3,
  rating: 'PG-13',
  reviewScore: 6.5,
  description: 'At the end of his career, a clueless fashion model is brainwashed to kill the Prime Minister of Malaysia.',
  director: 'Ben Stiller',
  stars: ['Ben Stiller', 'Owen Wilson', 'Christine Taylor'],
  similarMovies: similarMoviesSeeder()
},
{
  
}]
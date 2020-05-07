const similarMoviesSeeder = require('../randomData/similarMoviesSeeder.js');

const movieData = [{
  movieName: 'Rubber',
  movieID: 1,
  year: 2010,
  image: 'https://imgur.com/2sEyFGt',
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
  year: 1963,
  iamge: 'https://imgur.com/vSwK0MH',
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
  year: 2001,
  image: 'https://imgur.com/Tc8u4OY',
  rating: 'PG-13',
  reviewScore: 6.5,
  description: 'At the end of his career, a clueless fashion model is brainwashed to kill the Prime Minister of Malaysia.',
  director: 'Ben Stiller',
  stars: ['Ben Stiller', 'Owen Wilson', 'Christine Taylor'],
  similarMovies: similarMoviesSeeder()
},
{
  movieName: 'Wedding Crashers',
  movieID: 4,
  year: 2005,
  iamge: 'https://imgur.com/GCMuQg9',
  rating: 'R',
  reviewScore: 6.9,
  description: 'John Beckwith and Jeremy Grey, a pair of committed womanizers who sneak into weddings to take advantage of the romantic tinge in the air, find themselves at odds with one another when John meets and falls for Claire Cleary.',
  director: 'David Dobkin',
  stars: ['Owen Wilson', 'Vince Vaughn', 'Rachel McAdams'],
  similarMovies: similarMoviesSeeder()
},
{
  movieName: 'Face/Off',
  movieID: 5,
  year: 1997,
  iamge: 'https://imgur.com/XoMYNGK',
  rating: 'R',
  reviewScore: 7.3,
  description: 'In order to foil a terrorist plot, an FBI agent undergoes facial transplant surgery and assumes the identity of a criminal mastermind, who murdered his only son. The plan turns sour when the criminal wakes up prematurely and seeks revenge.',
  director: 'John Woo',
  stars: ['John Travoltoa', 'Nicolas Cage', 'Joan Allen'],
  similarMovies: similarMoviesSeeder()
}]

module.exports = movieData;
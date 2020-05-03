
const similarMoviesSeeder = () => {
  const count = Math.floor((Math.random() * 7) + 5);
  let relatedMovies = [];
  for (let i = 0; i < count; i++) {
    relatedMovies.push(Math.floor(Math.random() * 101));
  }
  return relatedMovies;
}

module.exports = similarMoviesSeeder;
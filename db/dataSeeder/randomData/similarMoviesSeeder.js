
const similarMoviesSeeder = () => {
  const count = Math.floor(Math.random() * (12 - 5) + 7);
  const relatedMovies = [];
  for (let i = 0; i < count; i + 1) {
    relatedMovies.push(Math.floor(Math.random() * 101));
  }
  return relatedMovies;
};

module.exports = similarMoviesSeeder;

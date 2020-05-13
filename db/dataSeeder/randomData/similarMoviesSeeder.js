
const similarMoviesSeeder = () => {
  const count = Math.floor(Math.random() * (12 - 5) + 7);
  const relatedMovies = [];
  for (let i = 0; i < count; i += 1) {
    let related = Math.floor(Math.random() * 101);
    while (relatedMovies.indexOf(related) === -1) {
      related = Math.floor(Math.random() * 101);
    }
    relatedMovies.push(related);
  }
  return relatedMovies;
};

module.exports = similarMoviesSeeder;

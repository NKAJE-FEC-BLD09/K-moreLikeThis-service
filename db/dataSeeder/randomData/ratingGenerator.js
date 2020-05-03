const ratingGen = () => {
  const ratings = ['G', 'PG', 'PG-13', 'R'];
  return ratings[Math.floor(Math.random() * 4)];
}

module.exports = ratingGen;
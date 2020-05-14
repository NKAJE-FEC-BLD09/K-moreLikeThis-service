const starsLimitter = (array) => {
  const string = array.join(', ');
  return `${string.slice(0, 30)} ...`;
};

module.exports = starsLimitter;

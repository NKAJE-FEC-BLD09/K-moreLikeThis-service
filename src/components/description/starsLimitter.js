const starsLimitter = (array) => {
  if (array) {
    const string = `${array.join(', ').slice(0, 25)} ...`;
    return string;
  }
  return null;
};

export default starsLimitter;

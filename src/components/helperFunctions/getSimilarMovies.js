//not used because I needed this.setState incorporated


const getSimilar = (arr) => {
  let movies = [];
  arr.forEach( movie => {
    fetch(`http://localhost:8153/movies/${movie}`)
    .then( res => res.json())
    .then( data => {
      movies.push(data)
    })
  })
  return movies;
};

module.exports = getSimilar;
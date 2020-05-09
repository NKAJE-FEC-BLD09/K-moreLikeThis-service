
const getSimilar = (arr) => {
  fetch('http://localhost:8153/movies', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({movies: arr})
  })
  .then( res => res.json())
  .then( data => {
    this.setState({similarMoviesData: data})
  })
}
import React from 'react';
import Movie from './Movie.jsx';

const Carousel = ( { movies }  ) => {
  console.log(movies.length)
  return (
    <div className="carousel">
  {movies.map( movie => {
      return <Movie key={movie.movieID} movie={movie} />
  })
}
  </div>

  )
}

export default Carousel;
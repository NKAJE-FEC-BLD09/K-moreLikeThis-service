import React from 'react';
import Movie from '../movie/Movie.jsx';

const Carousel = ( {movies} ) => {
  return (
    <div className="carousel">
      {movies.map(movie =>
        <Movie key={movie.movieID} movie={movie} />
      )}
    </div>
  )
}

export default Carousel;
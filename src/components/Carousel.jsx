import React from 'react';
import Movie from './Movie.jsx';

const Carousel = ( props ) => {
  return (
    <div className="carousel">
      {props.movies.map(movie =>
        <Movie key={movie.movieID} movie={movie} />
      )}
    </div>

  )
}

export default Carousel;
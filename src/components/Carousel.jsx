import React from 'react';
import Movie from './Movie.jsx';

const Carousel = ( {similar} ) => {
  return (
    similar.map( movie => (
      <Movie key={movie} movie={movie} />
    ))
  )
}

export default Carousel;
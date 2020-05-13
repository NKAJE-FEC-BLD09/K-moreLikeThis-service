import React from 'react';
import Movie from '../movie/Movie';
import './carousel.css';

const Carousel = ({ movies }) => (

  <div className="carousel">
    {movies.map(movie =>
      <Movie key={movie.movieID} movie={movie} />
    )}
  </div>
)


export default Carousel;
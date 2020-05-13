import React from 'react';
import PropTypes from 'prop-types';
import Movie from '../movie/Movie';
import './carousel.css';


const Carousel = ({ movies }) => (
  <div>
    <div className="carousel">
      {movies.map((movie) => <Movie key={movie.movieID} movie={movie} />)}
    </div>
    <div className="navBar">
      <a className="navLeft" href="something">prev</a>
      <a className="navRight" href="something">next</a>
    </div>
  </div>
);

Carousel.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Carousel;

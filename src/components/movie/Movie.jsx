import React from 'react';
import './movie.css';
import PropTypes from 'prop-types';

const Movie = ({ movie }) => (
  <div className="tbd">
    <img className="image" src={movie.image} alt="stuffandthings" />
  </div>
);

Movie.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Movie;

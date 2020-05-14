import React from 'react';
import PropTypes from 'prop-types';
import './description.css';

const DescriptionWords = ({ movie }) => (
  <div className="description-title">{movie.movieName}</div>
);

DescriptionWords.propTypes = {
  movie: PropTypes.shape({
    movieName: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    reviewScore: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    stars: PropTypes.array.isRequired,
  }).isRequired,
};

export default DescriptionWords;

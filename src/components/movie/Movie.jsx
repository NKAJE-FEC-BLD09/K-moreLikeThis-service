import React from 'react';
import './movie.css';
import PropTypes from 'prop-types';

const Movie = ({ movie, descriptionMovie, onImageClick }) => {
  let classVar;
  (movie.movieID === descriptionMovie.movieID) ? classVar = 'k-image-select' : classVar = 'k-image';
  return (
    <div className="tbd">
      <img className={classVar} src={movie.image} alt="stuffandthings" id={movie.movieID} onClick={(e) => onImageClick(e)} />
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({ image: PropTypes.string.isRequired, movieID: PropTypes.string.isRequired }).isRequired,
  descriptionMovie: PropTypes.shape({ movieID: PropTypes.string.isRequired }).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default Movie;

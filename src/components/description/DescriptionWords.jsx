import React from 'react';
import PropTypes from 'prop-types';
import ReviewScore from './ReviewScore';
import './description.css';

const starsLimitter = require('./starsLimitter.js');

const DescriptionWords = ({ movie }) => (
  <div>
    <div className="description-title">
      <a className="movie-title" href="link">{movie.movieName}</a>
      <span className="movie-year">
        (
        {movie.year}
        )
      </span>
    </div>
    <div className="description-infos">
      <span className="rating">{movie.rating}</span>
      <span className="genre">{movie.genre}</span>
    </div>
    <ReviewScore reviewScore={movie.reviewScore} />
    <p className="description-paragraph">
      {movie.description}
    </p>
    <div className="directors-stars">
      <div className="director">
        <span className="directors-stars-bold">Director: </span>
        <span className="directors-stars-norm">{movie.director}</span>
      </div>
      <div className="actors">
        <span className="directors-stars-bold">Stars: </span>
        <span className="directors-stars-norm">{starsLimitter(movie.stars)}</span>
      </div>
    </div>
  </div>
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

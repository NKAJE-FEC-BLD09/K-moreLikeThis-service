import React from 'react';
import './movie.css';

const Movie = ({ movie }) => (
  <div className="tbd">
    <img className="image" src={movie.image} alt="stuffandthings" />
  </div>
);

export default Movie;

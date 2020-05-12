import React from 'react';
import './movie.css';

const Movie = ( {movie} ) => {
  return (
    <div className="tbd">
    <img className='image' src={movie.image} alt="stuffandthings" ></img>
    </div>
  )
}

export default Movie;
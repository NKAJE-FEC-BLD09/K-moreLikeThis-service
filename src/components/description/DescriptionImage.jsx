import React from 'react';
import PropTypes from 'prop-types';
import DescriptionWords from './DescriptionWords';
import './description.css';

const Description = ({ movie }) => (
  <div className="descriptionSplit">
    <div className="image-watchlist">
      <img className="description-image" src={movie.image} alt="spongeBob" />
    </div>
    <div className="description-words">
      <DescriptionWords movie={movie} />
    </div>
  </div>
);

Description.propTypes = {
  movie: PropTypes.shape({ image: PropTypes.string }).isRequired,
};

export default Description;

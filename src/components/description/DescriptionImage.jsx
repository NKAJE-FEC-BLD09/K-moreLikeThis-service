import React from 'react';
import PropTypes from 'prop-types';
import DescriptionWords from './DescriptionWords';
import './description.css';

const Description = ({ movie }) => (
  <div className="descriptionSplit">
    <div className="image-watchlist">
      <img className="description-image" src="https://upload.wikimedia.org/wikipedia/en/3/31/The_SpongeBob_SquarePants_Movie_poster.jpg" alt="spongeBob" />
    </div>
    <div className="description-words">
      <DescriptionWords movie={movie} />
    </div>
  </div>
);

Description.propTypes = {
  movie: PropTypes.string.isRequired,
};

export default Description;

import React from 'react';
import PropTypes from 'prop-types';
import DescriptionWords from './DescriptionWords';
import './description.css';

const watchList = React.createElement('button', { type: 'button' }, 'Add to Watchlist');
const next = React.createElement('button', { type: 'button' }, 'next');

const Description = ({ movie }) => (
  <div className="descriptionSplit">
    <div className="image-watchlist">
      <img className="description-image" src={movie.image} alt="spongeBob" />
    </div>
    <div className="description-words">
      <DescriptionWords movie={movie} />
    </div>
    <div className="add-to-watch">
      {watchList}
    </div>
    <div className="next">
      {next}
    </div>
  </div>
);

Description.propTypes = {
  movie: PropTypes.shape({ image: PropTypes.string }).isRequired,
};

export default Description;

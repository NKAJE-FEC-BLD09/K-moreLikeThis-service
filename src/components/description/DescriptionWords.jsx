import React from 'react';
import PropTypes from 'prop-types';
import './description.css';

const DescriptionWords = ({ movie }) => (
  <div>hi</div>
);

DescriptionWords.propTypes = {
  movie: PropTypes.shape({}).isRequired,
};

export default DescriptionWords;

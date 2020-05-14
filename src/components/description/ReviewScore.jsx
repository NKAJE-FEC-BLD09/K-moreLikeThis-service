import React from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';

const ReviewScore = ({ reviewScore }) => {
  const onStarClick = (e) => {

  };
  return (
    <div className="ringo-star">
      <StarRatingComponent
        name="rating"
        starCount={10}
        value={reviewScore}
        onStarClick={onStarClick}
      />
    </div>
  );
};

ReviewScore.propTypes = {
  reviewScore: PropTypes.number.isRequired,
};

export default ReviewScore;

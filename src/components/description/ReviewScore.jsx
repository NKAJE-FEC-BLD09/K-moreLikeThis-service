import React from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';
import './description.css';

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
        starColor="#a58600"
      />
      <span className="score">
        {reviewScore}
        <span className="divisor">
          /10
        </span>
      </span>
    </div>
  );
};

ReviewScore.propTypes = {
  reviewScore: PropTypes.number.isRequired,
};

export default ReviewScore;

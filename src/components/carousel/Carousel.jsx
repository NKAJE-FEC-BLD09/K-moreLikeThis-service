import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from '../movie/Movie';
import './carousel.css';


class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const {
      movies,
      onNext6Click,
      onPrev6Click,
      descriptionMovie,
      onImageClick,
    } = this.props;
    return (
      <div>
        <div className="carousel">
          {movies.map((movie) => <Movie key={movie.movieID} movie={movie} descriptionMovie={descriptionMovie} onImageClick={onImageClick} />)}
        </div>
        <div className="navBar">
          <a className="navLeft" href="something" onClick={(e) => onPrev6Click(e)}>prev 6 ◄</a>
          <a className="navRight" href="something" onClick={(e) => onNext6Click(e)}>next 6 ►</a>
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onNext6Click: PropTypes.func.isRequired,
  onPrev6Click: PropTypes.func.isRequired,
  onImageClick: PropTypes.func.isRequired,
  descriptionMovie: PropTypes.shape({}).isRequired,
};

export default Carousel;

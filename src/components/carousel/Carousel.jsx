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
    } = this.props;
    return (
      <div>
        <div className="carousel">
          {movies.map((movie) => <Movie key={movie.movieID} movie={movie} descriptionMovie={descriptionMovie} />)}
        </div>
        <div className="navBar">
          <a className="navLeft" href="something" onClick={(e) => onPrev6Click(e)}>prev</a>
          <a className="navRight" href="something" onClick={(e) => onNext6Click(e)}>next</a>
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onNext6Click: PropTypes.func.isRequired,
  onPrev6Click: PropTypes.func.isRequired,
  descriptionMovie: PropTypes.shape({}).isRequired,
};

export default Carousel;

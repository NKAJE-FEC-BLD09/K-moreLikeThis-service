import React from 'react';
import './App.css';

import Title from './components/title/Title';
import DescriptionImage from './components/description/DescriptionImage';
import Carousel from './components/carousel/Carousel';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      similarMovies: [],
      carouselLocation: 'L',
      carouselMovies: [],
      descriptionMovie: {},
    };
    this.onPrev6Click = this.onPrev6Click.bind(this);
    this.onNext6Click = this.onNext6Click.bind(this);
    this.onNextButtClick = this.onNextButtClick.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8153/movies/1')
      .then((res) => res.json())
      .then((data) => {
        const movieArr = [];
        data.similarMovies.forEach((movie) => {
          fetch(`http://localhost:8153/movies/${movie}`)
            .then((res) => res.json())
            .then((newData) => {
              movieArr.push(newData);
            })
            .then(() => {
              this.setState({
                similarMovies: movieArr,
                descriptionMovie: movieArr[0],
                carouselMovies: movieArr.slice(0, 6),
              });
            });
        });
      });
  }

  onPrev6Click(e) {
    e.preventDefault();
    const { carouselLocation, similarMovies } = this.state;
    if (carouselLocation === 'R') {
      this.setState({ carouselLocation: 'L', carouselMovies: similarMovies.slice(0, 6) });
    }
  }

  onNext6Click(e) {
    console.log('hi')
    e.preventDefault();
    const { carouselLocation, similarMovies } = this.state;
    if (carouselLocation === 'L') {
      this.setState({ carouselLocation: 'R', carouselMovies: similarMovies.slice(7, 12) });
    }
  }

  onNextButtClick() {

  }


  render() {
    const { carouselMovies, descriptionMovie } = this.state;
    return (
      <div className="cont">
        <div className="more-like-this">
          <div>
            <Title />
          </div>
          <div className="descriptousel">
            <div className="carouNav">
              <Carousel
                movies={carouselMovies}
                onPrev6Click={this.onPrev6Click}
                onNext6Click={this.onNext6Click}
              />
            </div>
            <div className="descriptionBox">
              <DescriptionImage movie={descriptionMovie} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

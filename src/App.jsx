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
      descriptionIndex: 0,
    };
    this.onPrev6Click = this.onPrev6Click.bind(this);
    this.onNext6Click = this.onNext6Click.bind(this);
    this.onNextButtClick = this.onNextButtClick.bind(this);
    this.onImageClick = this.onImageClick.bind(this);
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
      this.setState({
        carouselLocation: 'L',
        carouselMovies: similarMovies.slice(0, 6),
        descriptionMovie: similarMovies[0],
        descriptionIndex: 0,
      });
    }
  }

  onNext6Click(e) {
    e.preventDefault();
    const { carouselLocation, similarMovies } = this.state;
    const index = 6;
    if (carouselLocation === 'L') {
      this.setState({
        carouselLocation: 'R',
        carouselMovies: similarMovies.slice(6, 13),
        descriptionMovie: similarMovies[index],
        descriptionIndex: index,
      });
    }
  }

  onNextButtClick(e) {
    e.preventDefault();
    const { descriptionIndex, similarMovies } = this.state;
    if (descriptionIndex + 1 < 6) {
      this.setState({
        descriptionIndex: descriptionIndex + 1,
        descriptionMovie: similarMovies[descriptionIndex + 1],
      });
    } else if (descriptionIndex + 1 > 5 && descriptionIndex + 1 < similarMovies.length) {
      this.setState({
        descriptionIndex: descriptionIndex + 1,
        descriptionMovie: similarMovies[descriptionIndex + 1],
        carouselMovies: similarMovies.slice(6, 13),
        carouselLocation: 'R',
      });
    }
  }

  onImageClick(e) {
    e.preventDefault();
    const { similarMovies } = this.state;
    for (const movie of similarMovies) {
      if (movie.movieID == e.target.id) {
        this.setState({ descriptionMovie: movie });
      }
    }
  }

  render() {
    const { carouselMovies, descriptionMovie } = this.state;
    return (
      <div className="more-like-this">
        <div>
          <Title />
        </div>
        <div className="descriptousel">
          <div className="carouNav">
            <Carousel
              movies={carouselMovies}
              descriptionMovie={descriptionMovie}
              onPrev6Click={this.onPrev6Click}
              onNext6Click={this.onNext6Click}
              onImageClick={this.onImageClick}
            />
          </div>
          <div className="descriptionBox">
            <DescriptionImage
              movie={descriptionMovie}
              onNextButtClick={this.onNextButtClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

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
      descriptionMovie: {},
    };
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
              });
            });
        });
      });
  }


  render() {
    const { similarMovies, descriptionMovie } = this.state;
    return (
      <div className="more-like-this">
        <div>
          <Title />
        </div>
        <div className="descriptousel">
          <div className="carouNav">
            <Carousel movies={similarMovies.slice(0, 6)} />
          </div>
          <div className="descriptionBox">
            <DescriptionImage movie={descriptionMovie} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

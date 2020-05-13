import React from 'react';
import './App.css';

import Title from './components/title/Title';
import Description from './components/description/Description';
import Carousel from './components/carousel/Carousel';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      similarMovies: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:8153/movies/1')
      .then((res) => res.json())
      .then((data) => {
        data.similarMovies.forEach((movie) => {
          fetch(`http://localhost:8153/movies/${movie}`)
            .then((res) => res.json())
            .then((newData) => {
              const { similarMovies } = this.state;
              if (similarMovies.length === 6) {
                return;
              }
              this.setState({ similarMovies: [...similarMovies, newData] });
            });
        });
      });
  }


  render() {
    const { similarMovies } = this.state;
    return (
      <div className="more-like-this">
        <div>
          <Title />
        </div>
        <div className="descriptousel">
          <div className="carouNav">
            <Carousel movies={similarMovies} />
          </div>
          <div className="descriptionBox">
            <Description />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

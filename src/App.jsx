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
    const { similarMovies } = this.state;
    fetch('http://localhost:8153/movies/1')
      .then((res) => res.json())
      .then((data) => {
        data.similarMovies.forEach((movie) => {
          fetch(`http://localhost:8153/movies/${movie}`)
            .then((res) => res.json())
            .then((newData) => {
              const similarArr = similarMovies;
              if (similarArr.length === 6) {
                return;
              }
              this.setState({ similarMovies: [...similarArr, newData] });
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
          <div>
            <Carousel movies={similarMovies} />
          </div>
          <div>
            <Description />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

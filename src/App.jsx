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
              const similarArr = this.state.similarMovies;
              if (similarArr.length === 6) { //remove me when carousel
                return;
              }
              this.setState({ similarMovies: [...similarArr, newData] });
            });
        });
      });
  }


  render() {
    return (
      <div className="more-like-this">
        <div>
          <Title />
        </div>
        <div className="descriptousel">
          <div>
            <Carousel movies={this.state.similarMovies} />
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

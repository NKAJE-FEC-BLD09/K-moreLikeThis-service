import React from 'react';
import './App.css';

import Title from './components/Title.jsx';
import LearnMore from './components/LearnMore.jsx';
import Description from './components/Description.jsx';
import Carousel from './components/Carousel.jsx';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      similarMovies: [],
      similarMoviesData: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:8153/movies/1`)
    .then( res => res.json())
    .then( data => {
      this.setState({
        similarMovies: data.similarMovies
      })
    })
    .then( () => {
      let movies = [];
      this.state.similarMovies.forEach( movie => {
        fetch(`http://localhost:8153/movies/${movie}`)
        .then( res => res.json())
        .then( data => {
          movies.push(data)
        })
      })
      return movies;
    })
    .then( movies => {
      this.setState({similarMoviesData: movies});
    });
  }

  //functions

  render() {
    return (
      <div>
        <Title />
        <LearnMore />
        <Description state={this.state} />
        <Carousel similar={this.state.similarMovies} />
      </div>
    )
  }
}

export default App;

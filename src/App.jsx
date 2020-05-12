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
    }
  }

  componentDidMount() {
    fetch(`http://localhost:8153/movies/1`)
    .then( res => res.json())
    .then( (data) => {
      data.similarMovies.forEach( movie => {
        fetch(`http://localhost:8153/movies/${movie}`)
        .then( res => res.json())
        .then( data => {
          let similarArr = this.state.similarMovies;
          this.setState({similarMovies: [...similarArr, data]})
        })
      });
    })
  }

  //functions

  render() {
    return (
      <div>
        <Title />
        <LearnMore />
        <Description  />
        <Carousel movies={ this.state.similarMovies } />
      </div>
    )
  }
}

export default App;

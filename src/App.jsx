import React from 'react';
import './App.css';

import Title from './components/Title.jsx';
import LearnMore from './components/LearnMore.jsx';
import Description from './components/Description.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    fetch('http://localhost:8153/movies/1')
    .then( data => {
      data.json()
      .then( movie => {
        this.setState({/*movie data*/})
      })
    })
  }

  //functions

  render() {
    return (
      <div>
        <Title />
        <LearnMore />
        <Description />
      </div>
    )}
}

export default App;

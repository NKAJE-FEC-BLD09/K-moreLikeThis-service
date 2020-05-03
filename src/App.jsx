import React from 'react';
import './App.css';

const faker = require('faker');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  //functions

  render() {
    return (
      <div>
    <h1>More Like This</h1>
    <div>{faker.fake("{{lorem.sentence}}")}</div>
      </div>
    )}
}

export default App;

import React from 'react';
import './App.css';

import Title from './components/Title.jsx';
import LearnMore from './components/LearnMore.jsx';

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
        <Title />
        <LearnMore />
      </div>
    )}
}

export default App;

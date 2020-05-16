import React from 'react';
import LearnMore from './learnMore/LearnMore';
import './title.css';

const Title = () => (
  <div className="titleBox">
    <h2 className="title">More Like This</h2>
    <div className="">
      <LearnMore />
    </div>
  </div>
);

export default Title;

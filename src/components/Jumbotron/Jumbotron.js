import React from 'react';
import './Jumbotron.css';

const Jumbotron = (props) => (
  <div className="jumbotron">
    <h1>Xmas Wilders Memory Game!</h1>
    <p className='title'>Pick a new Wilder image everytime.</p>
    <p className='score'>Score: {props.score} <span>/ Highest score: {props.highScore} </span></p>
  </div>
)

export default Jumbotron;

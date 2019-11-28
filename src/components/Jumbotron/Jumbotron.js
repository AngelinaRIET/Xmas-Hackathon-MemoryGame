import React from 'react';
import './Jumbotron.css';

const Jumbotron = (props) => (
<div className="jumbotron">
  <h1>Xmas Wilders Memory Game!</h1>
  <p>Pick a new Wilder picture everytime.</p>
  <p>Score: {props.score} <span>/ Highest score: {props.highScore} </span></p>
</div>
)

export default Jumbotron;

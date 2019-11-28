import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron/Jumbotron.js';
import Card from './components/Card/Card.js';
import cards from './cards.json';
import './index.css';

class App extends Component {

  state = {
    cards: cards,
    score: 0,
    highScore: 0,
    clickedCards: [],
  }

  //Function to update the score when a card is clicked  
  updateScore = (id) => {

    //If statement which determines what happens if they picked an image they already picked
    if (this.state.clickedCards.includes(id)) {
      alert('You picked this Wilder already!');
      this.setState({ score: 0, clickedCards: [] })
    }

    //Else statement that determines what happens if they picked an image they have not picked before
    else {
      this.setState({ clickedCards: [...this.state.clickedCards, id] })
      this.setState({ score: this.state.score + 1 })
      //Nested if statement that determines what happens if user gets a high score
      if (this.state.score >= this.state.highScore) {
        this.setState({ highScore: this.state.score + 1 })
      }
      //Nested if statement if user wins the game  
      if (this.state.score === 17) {
        this.setState({ score: 0, highScore: 18, clickedCards: [], cards: cards })
        alert('You won!');
      }
    }
  }

  // Fisher-Yates Shuffle to randomize layout of cards
  //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  randomCards = (array) => {
    let currentIndex = array.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      let temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    this.setState({ randomize: cards });
  }

  //Render the entire app
  render() {
    return (
      <div>
        <Jumbotron score={this.state.score} highScore={this.state.highScore} />
        <div className="container">
          {this.state.cards.map(cardRender => (
            <div className='col-md-2 col-xs-4 nopadding' id={cardRender.id}>
              <Card className="card-position"
                image={cardRender.image}
                randomCards={() => { this.randomCards(this.state.cards) }}
                updateScore={() => { this.updateScore(cardRender.id) }} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App;

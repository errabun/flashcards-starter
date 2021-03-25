const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns]
  }

  takeTurn(userGuess) {
    let currentTurn = new Turn(userGuess, this.returnCurrentCard());
    if ( !currentTurn.evaluateGuess() ) {
      this.incorrectGuesses.push(currentTurn.currentCard.id);
    }
    this.turns++;
    return currentTurn.giveFeedback();
  }

  calculatePercentageCorrect() {
    let perc = ((this.turns - this.incorrectGuesses.length) / this.turns) * 100;
    return Math.round(perc);
  }

  endRound() {
    let message = `** Round over! ** You answered ${this.calculatePercentageCorrect()}% of the questions correctly!`
    console.log(message);
    return message;
  }
}

module.exports = Round;

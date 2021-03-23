class Turn {
  constructor(userGuess, cardInst) {
    this.userGuess = userGuess;
    this.currentCard = cardInst;
  }

  returnGuess = () => { return this.userGuess };

  returnCard = () => { return this.currentCard };

  evaluateGuess = () => {
    return this.currentCard.correctAnswer === this.userGuess;
  };

  giveFeedback = () => {
    return this.evaluateGuess() ? 'Correct!' : 'Incorrect!';
  }; 
}

module.exports = Turn;

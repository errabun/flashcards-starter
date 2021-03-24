class Turn {
  constructor(userGuess, cardInst) {
    this.userGuess = userGuess;
    this.currentCard = cardInst;
  }

  returnGuess = () => this.userGuess;

  returnCard = () => this.currentCard;

  evaluateGuess = () => this.currentCard.correctAnswer === this.userGuess;

  giveFeedback = () => this.evaluateGuess() ? 'Correct!' : 'Incorrect!';
}

module.exports = Turn;

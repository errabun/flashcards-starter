class Turn {
  constructor(userGuess, card) {
    this.userGuess = userGuess;
    this.currentCard = card;
  }

  returnGuess = () => this.userGuess;

  returnCard = () => this.currentCard;

  evaluateGuess = () => this.currentCard.correctAnswer === this.userGuess;

  giveFeedback = () => this.evaluateGuess() ? 'Correct!' : 'Incorrect!';
}

module.exports = Turn;

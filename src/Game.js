const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound;
  }

  start() {
    let cards = prototypeQuestions.map(({ id, question, answers, correctAnswer }) => {
      return new Card(id, question, answers, correctAnswer)
    });
    let deck = new Deck(cards);
    this.currentRound = new Round(deck);
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;

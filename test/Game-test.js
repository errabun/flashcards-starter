const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const Deck = require('../src/Deck');
const Round = require('../src/round');
const Game = require('../src/Game')

describe('Game', function() {
  let cards, deck, round;

  beforeEach(function() {
    cards = prototypeQuestions.map(({ id, question, answers, correctAnswer }) => {
      return new Card(id, question, answers, correctAnswer)
    })
    deck = new Deck(cards);
    round = new Round(deck);
  });

  it('should be a function', function() {

    expect(Game).to.be.a('function');
  });

  it('should instantiate new cards', function() {

    expect(cards).to.be.a('array');
    expect(cards[0]).to.be.an.instanceOf(Card);
  });

  it('should instantiate a Deck with cards', function() {

    expect(deck).to.be.a('object');
    expect(deck.cards).to.be.a('array');
    expect(deck.cards[1]).to.be.an.instanceOf(Card);
  });

  it('should instantiate a new Round using deck', function() {

    expect(round).to.be.a('object');
    expect(round.deck).to.be.an.instanceOf(Deck)
  });
})

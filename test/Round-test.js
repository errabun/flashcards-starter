const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();

    expect(Round).to.be.a('function');
  });

  it('should be an instance of a Round', function() {
    const round = new Round();

    expect(round).to.be.an.instanceof(Round);
  });

  it('should take a array of cards as a Deck', function() {
    const card1 = new Card (10, 'Which iteration method returns the first array element where the callback function returns true', ['find()', 'filter()', 'forEach()'], 'find()');
    const card2 = new Card (1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card (7, 'What data type is wrapped in quoties?', ['string', 'array', 'function'], 'string');

    const cards = [card1, card2, card3]
    const deck = new Deck(cards);
    const round = new Round(deck);

    expect(round.deck).to.be.a('array');
  });

  // it('should be able to return the current card being played', function() {
  //   const card1 = new Card (10, 'Which iteration method returns the first array element where the callback function returns true', ['find()', 'filter()', 'forEach()'], 'find()');
  //   const card2 = new Card (1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  //   const card3 = new Card (7, 'What data type is wrapped in quoties?', ['string', 'array', 'function'], 'string');
  //
  //   const cards = [card1, card2, card3]
  //   const deck = new Deck(cards);
  // });

  it('should start round with 0 turns', function() {
    const card1 = new Card (10, 'Which iteration method returns the first array element where the callback function returns true', ['find()', 'filter()', 'forEach()'], 'find()');
    const card2 = new Card (1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const cards = [card1, card2];
    const deck = new Deck(cards);
    const round = new Round(deck);

    expect(round.turns).to.equal(0);
  });

  it('should track incorrect guesses in a separate array', function() {
    const card1 = new Card (10, 'Which iteration method returns the first array element where the callback function returns true', ['find()', 'filter()', 'forEach()'], 'find()');
    const card2 = new Card (1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const cards = [card1, card2];
    const deck = new Deck(cards);
    const round = new Round(deck);

    expect(round.incorrectGuesses).to.equal([]);
  });

  it('should allow user to take a turn', function() {
    const card1 = new Card (10, 'Which iteration method returns the first array element where the callback function returns true', ['find()', 'filter()', 'forEach()'], 'find()');
    const card2 = new Card (1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const cards = [card1, card2];
    const deck = new Deck(cards);
    const round = new Round(deck);
    const turn1 = new Turn('array', card2);

    round.takeTurn(turn1);

    expect(round.turns).to.equal(1);
    expect(round.incorrectGuesses).to.equal([1]);
    expect(card.currentCard).to.equal(deck.card2);

    const turn2 = new Turn('object', card2);

    round.takeTurn(turn2);

    expect(round.turns).to.equal(2);
    expect(round.incorrectGuesses).to.equal([1]);

  })
})

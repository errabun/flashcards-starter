const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();

    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();

    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be initialized with an array of Cards', function() {
    const card1 = new Card (10, 'Which iteration method returns the first array element where the callback function returns true', ['find()', 'filter()', 'forEach()'], 'find()');
    const card2 = new Card (1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card (7, 'What data type is wrapped in quoties?', ['string', 'array', 'function'], 'string');

    const cards = [card1, card2, card3]
    const deck = new Deck(cards);

    expect(cards).to.be.a('array');
    expect(card2.correctAnswer).to.equal('object');
  })

  it('should be able to see how many cards are in the deck', function() {
    const card1 = new Card (10, 'Which iteration method returns the first array element where the callback function returns true', ['find()', 'filter()', 'forEach()'], 'find()');
    const card2 = new Card (1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card (7, 'What data type is wrapped in quoties?', ['string', 'array', 'function'], 'string');

    const cards = [card1, card2, card3]
    const deck = new Deck(cards);

    expect(deck.countCards()).to.equal(3);
  })
})

const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
  let card1, card2, card3, deck;

  beforeEach(function() {
    card1 = new Card (
      10,
      'Which iteration method returns the first array element where the callback function returns true?',
      ['find()', 'filter()', 'forEach()'],
      'find()'
    );
    card2 = new Card (
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object'
    );
    card3 = new Card (
      7,
      'What data type is wrapped in quoties?',
      ['string', 'array', 'function'],
      'string'
    );

    deck = new Deck([card1, card2, card3])
  })

  it('should be a function', function() {
    const deck = new Deck();

    expect(Deck).to.be.a('function');
  });

  it('should instantiate an object', function() {
    const deck = new Deck();

    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be initialized with an array of Cards', function() {

    expect(deck.cards).to.be.a('array');
    expect(card2.correctAnswer).to.equal('object');
  })

  it('should be able to see how many cards are in the deck', function() {

    expect(deck.countCards()).to.equal(3);
  })
})

const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round', function() {
  let card1, card2, card3, deck, round;

  beforeEach(function() {
    card1 = new Card (
      10,
      'Which iteration method returns the first array element where the callback function returns true',
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

    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {

    expect(Round).to.be.a('function');
  });

  it('should be an instance of a Round', function() {

    expect(round).to.be.an.instanceof(Round);
  });

  it('should take in a deck of cards to play from', function() {

    expect(round.deck).to.be.an.instanceof(Deck);
  });

  it('should start round with 0 turns', function() {

    expect(round.turns).to.equal(0);
  });

  it('should track incorrect guesses in a separate array', function() {

    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('user should be able to return the current card to the deck', function() {

    expect(round.returnCurrentCard).to.equal()
  });

  describe('should allow user to take a turn', function() {

    it('should increment the round turn count for each turn', function() {

      round.takeTurn('Any guess');
      round.takeTurn('Another random guess');

      expect(round.turns).to.equal(2);
    });

    it('should be able to notify user if they answered correctly', function() {
      
    })
  })
// })
//
// describe('should allow player to attempt to answer', function() {
//
//   it('should allow user to take a turn', function() {
// })
//
//
//     round.takeTurn(turn1);
//
//     expect(round.turns).to.equal(1);
//     expect(round.incorrectGuesses).to.equal([1]);
//     expect(card.currentCard).to.equal(deck.card2);
//
//     const turn2 = new Turn('object', card2);
//
//     round.takeTurn(turn2);
//
//     expect(round.turns).to.equal(2);
//     expect(round.incorrectGuesses).to.equal([1]);
//
//   })
})

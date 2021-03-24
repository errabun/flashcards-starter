const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let turn1, turn2, turn3, card;
  beforeEach(function() {
    card = new Card(
      1,
      'What is the best sport?',
      ['Baseball', 'Golf', 'Football'],
      'Golf'
    );
    turn1 = new Turn('Baseball', card);
    turn2 = new Turn('Golf', card);
    turn3 = new Turn('Football', card);
  });

  it('should be a function', function() {

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {

    expect(turn1).to.be.an.instanceof(Turn);
  });

  it('should be able to store the users guess to question', function() {

    expect(turn1.userGuess).to.equal('Baseball');
  });

  it('should be able to store current card object', function() {

    expect(turn1.currentCard).to.deep.equal(card)
  });

  it('should return the users guess', function() {

    expect(turn3.returnGuess()).to.equal('Football');
  });

  it('should be able to return the current card', function() {

    expect(turn1.returnCard()).to.deep.equal(turn1.currentCard);
  });

  it('should be able to check if user\'s guess is correct', function() {

    expect(turn1.evaluateGuess()).to.equal(false);

    expect(turn2.evaluateGuess()).to.equal(true);

    expect(turn3.evaluateGuess()).to.equal(false);
  });

  it('should tell user if there guess is correct or incorrect', function() {

    expect(turn1.giveFeedback()).to.equal('Incorrect!');

    expect(turn2.giveFeedback()).to.equal('Correct!')

    expect(turn3.giveFeedback()).to.equal('Incorrect!');
  });
})

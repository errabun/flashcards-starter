const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be an instance of Turn', function() {
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to store the users guess to question', function() {
    const cardInst = new Card();
    const turn = new Turn('Green is the best color', cardInst);

    expect(turn.userGuess).to.equal('Green is the best color');
  });

  it('should be able to store current card object', function() {
    const cardInst = new Card();
    const turn = new Turn('Green is not the best color', cardInst);

    expect(turn.currentCard).to.deep.equal(cardInst)
  });

  it('should return the users guess', function() {
    const cardInst = new Card();
    const turn = new Turn('Green is not the best color', cardInst);

    expect(turn.returnGuess()).to.equal(turn.userGuess);
  });

  it('should be able to return the current card', function() {
    const cardInst = new Card();
    const turn = new Turn('array', cardInst);

    expect(turn.returnCard()).to.deep.equal(turn.currentCard);
  });

  it('should be able to check if user\'s guess is correct', function() {
    const cardInst = new Card(1, 'What is the best sport?', ['Baseball', 'Golf', 'Football'], 'Golf');

    const turn1 = new Turn('Football', cardInst);

    expect(turn1.evaluateGuess()).to.equal(false);

    const turn2 = new Turn('Golf', cardInst);

    expect(turn2.evaluateGuess()).to.equal(true);

    const turn3 = new Turn('Baseball', cardInst);

    expect(turn3.evaluateGuess()).to.equal(false);
  });

  it('should tell user if there guess is correct or incorrect', function() {
    const cardInst = new Card(2, 'What fruit is a teachers favorite?', ['Apples', 'Bananas', 'Oranges'], 'Apples');
    const turn1 = new Turn('Apples', cardInst);

    expect(turn1.giveFeedback()).to.equal('Correct!');

    const turn2 = new Turn('Bananas', cardInst);

    expect(turn2.giveFeedback()).to.equal('Incorrect!')

    const turn3 = new Turn('Oranges', cardInst);

    expect(turn3.giveFeedback()).to.equal('Incorrect!');
  });
})

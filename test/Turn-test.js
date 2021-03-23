const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be an instance of Turn', function() {
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to store the users guess to question', function() {
    const turn = new Turn('Green is the best color', card);

    expect(turn.userGuess).to.equal('Green is the best color');
  });

  it('should be able to store current card object', function() {
    const turn = new Turn('Green is not the best color', card);

    expect(turn.currentCard).to.deep.equal(card)
  });

  it('should return the users guess', function() {
    const turn = new Turn('Green is not the best color', card);

    expect(turn.returnGuess()).to.equal(turn.userGuess);
  });

  it('should be able to return the current card', function() {
    const turn = new Turn('array', card);

    expect(turn.returnCard()).to.deep.equal(turn.currentCard);
  });

  it('should be able to check if user\'s guess is correct', function() {
    const turn1 = new Turn('Football', card);

    expect(turn1.evaluateGuess()).to.equal(false);

    const turn2 = new Turn('Golf', card);

    expect(turn2.evaluateGuess()).to.equal(true);

    const turn3 = new Turn('Baseball', card);

    expect(turn3.evaluateGuess()).to.equal(false); 
  })

  it('should tell user if there guess is correct or incorrect', function() {
    const turn1 = new Turn('Apples', card);

    expect(turn1.giveFeedback()).to.equal('Correct!');

    const turn2 = new Turn('Bananas', card);

    expect(turn2.giveFeedback()).to.equal('Incorrect!')

    const turn3 = new Turn('Oranges', card);

    expect(turn3.giveFeedback()).to.equal('Incorrect');
  })
})

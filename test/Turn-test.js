const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be an instance of Turn', function() {
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to store the users guess to question', function() {
    const turn = new Turn('Green is the best color', {});

    expect(turn.userGuess).to.equal('Green is the best color');
  });

  it('should be able to store current card object', function() {
    const turn = new Turn('Green is not the best color', { id: 1, question: 'What is not the best color?', answers: [], correctAnswer: 'object' });

    expect(turn.currentCard).to.equal({ id: 1, question: 'What is not the best color?', answers: [], correctAnswer: 'object' })
  });

  it('should return the users guess', function() {
    const turn = new Turn('Green is not the best color', { id: 1, question: 'What is not the best color?', answers: [], correctAnswer: 'object' });

    turn.returnGuess();

    expect(turn.returnGuess()).to.equal(turn.userGuess);
  });

  it('should be able to return the current card', function() {
    const turn = new Turn('array', { id: 2, question: 'What data type is wrapped in square brackets?', answers: ['object', 'string', 'array'], correctAnswer: 'array' })

    expect(turn.returnCard()).to.equal(turn.currentCard); 
  })
})

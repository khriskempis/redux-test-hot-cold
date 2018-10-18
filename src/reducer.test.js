import gameReducer from './reducer';
import {generateAuralUpdate, restartGame, makeGuess } from './actions';

describe('reducer', ()=> {

  it('should set initial state', ()=> {
    const state = gameReducer(undefined, {type: '_UNKOWN'});
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual("Make your guess!");
    expect(state.auralStatus).toEqual('');
  });

  it('should return current state on unkown action', ()=> {
    const currentState = {};
    const state = gameReducer(currentState, {type: '_UNKOWN'})
    expect(state).toBe(currentState);
  }); 

  describe('restartGame', ()=> {
    it('should restart game', ()=> {
      let state;
      state = gameReducer(state, restartGame())
      expect(state.feedback).toEqual('Make your guess!');
    });
  });

  describe('makeGuess', ()=> {
    let state = {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: 15
    }

    it('should add guesses and give proper feedback when close', ()=> {
      state = gameReducer(state, makeGuess(14));
      expect(state.feedback).toEqual("You're Hot!");
      expect(state.guesses).toEqual([14]);
      expect(state.correctAnswer).toEqual(15);
    });

    it('should add guesses and give proper feedback when far', ()=> {
      state = gameReducer(state, makeGuess(80));
      expect(state.feedback).toEqual("You're Ice Cold...");
      expect(state.guesses).toEqual([14, 80]);
      expect(state.correctAnswer).toEqual(15);
    });

    it('should tell you when you got the right answer', ()=> {
      state = gameReducer(state, makeGuess(15));
      expect(state.feedback).toEqual("You got it!");
      expect(state.guesses).toEqual([14, 80, 15]);
    })
  });

  describe('auralUpdates', ()=> {
    let state = {
      guesses: [13],
      feedback: "You're Cold",
      auralStatus: '',
      correctAnswer: 50
    }
    it('should update aural status', ()=> {
      state = gameReducer(state, generateAuralUpdate());
      expect(state.auralStatus).toEqual('Here\'s the status of the game right now: You\'re Cold You\'ve made 1 guess. It was: 13')
    })

  });
});
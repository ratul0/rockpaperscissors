import { TestBed } from '@angular/core/testing';
import { GameStatus, Options, Result } from 'src/app/models/game';
import { RockPaperScissorsStrategy } from './rock-paper-scissor.strategy';

describe('RockPaperScissorsStrategy', () => {
  let service: RockPaperScissorsStrategy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RockPaperScissorsStrategy],
    });
    service = TestBed.inject(RockPaperScissorsStrategy);
  });

  it('should provide right result if player 1 choose rock and player 2 choose scissor', () => {
    const result = createResultObject(Options.ROCK, Options.SCISSOR);
    const resultObject = service.calculateResult(result);
    expect(resultObject.result).toEqual('Player 1 wins');
  });

  it('should provide right result if player 1 choose rock and player 2 choose paper', () => {
    const result = createResultObject(Options.ROCK, Options.PAPER);
    const resultObject = service.calculateResult(result);
    expect(resultObject.result).toEqual('Player 2 wins');
  });

  it('should provide right result if player 1 choose scissor and player 2 choose paper', () => {
    const result = createResultObject(Options.SCISSOR, Options.PAPER);
    const resultObject = service.calculateResult(result);
    expect(resultObject.result).toEqual('Player 1 wins');
  });

  it('should provide right result if player 1 choose scissor and player 2 choose rock', () => {
    const result = createResultObject(Options.SCISSOR, Options.ROCK);
    const resultObject = service.calculateResult(result);
    expect(resultObject.result).toEqual('Player 2 wins');
  });

  it('should provide right result if player 1 choose paper and player 2 choose rock', () => {
    const result = createResultObject(Options.PAPER, Options.ROCK);
    const resultObject = service.calculateResult(result);
    expect(resultObject.result).toEqual('Player 1 wins');
  });

  it('should provide right result if player 1 choose paper and player 2 choose scissor', () => {
    const result = createResultObject(Options.PAPER, Options.SCISSOR);
    const resultObject = service.calculateResult(result);
    expect(resultObject.result).toEqual('Player 2 wins');
  });

  it('should provide right result if if both player choose same option', () => {
    const result = createResultObject(Options.PAPER, Options.PAPER);
    const resultObject = service.calculateResult(result);
    expect(resultObject.result).toEqual("It's a Draw");
  });

  it('should update score of player 1 if player 1 wins', () => {
    const result = createResultObject(Options.PAPER, Options.ROCK);
    const resultObject = service.calculateResult(result);
    expect(resultObject.player1Score).toEqual(1);
  });

  it('should update score of player 2 if player 2 wins', () => {
    const result = createResultObject(Options.SCISSOR, Options.ROCK);
    const resultObject = service.calculateResult(result);
    expect(resultObject.player2Score).toEqual(1);
  });

  function createResultObject(player1: Options, player2: Options): Result {
    return {
      player1: player1,
      player2: player2,
      result: '',
      player1Score: 0,
      player2Score: 0,
      gameStatus: GameStatus.INITIAL_STATE,
      roundNumber: 1,
    };
  }
});

export interface Result {
  player1: Options | null;
  player2: Options | null;
  result: string;
  player1Score: number;
  player2Score: number;
  gameStatus: GameStatus;
  roundNumber: number;
}

export enum GameStatus {
  INITIAL_STATE,
  COMPLETED,
}

export enum Options {
  ROCK,
  PAPER,
  SCISSOR,
}

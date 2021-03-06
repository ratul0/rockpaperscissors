import { Component } from '@angular/core';
import { randomEnum } from 'src/app/helpers';
import { GameStatus, Options, Result } from 'src/app/models/game';
import { CalculateResultService } from 'src/app/services/result/calculate-result.service';

@Component({
  selector: 'app-computer-vs-computer',
  templateUrl: './computer-vs-computer.component.html',
  styleUrls: ['./computer-vs-computer.component.scss'],
})
export class ComputerVsComputerComponent {
  constructor(private readonly calculateResultService: CalculateResultService) {
    this.board = this.initializeResult();
  }

  public board: Result;

  public get isInitialState(): boolean {
    return this.board.gameStatus === GameStatus.INITIAL_STATE;
  }

  public get isCompleted(): boolean {
    return this.board.gameStatus === GameStatus.COMPLETED;
  }

  public get gameOptions(): typeof Options {
    return Options;
  }

  public get roundNumber(): number {
    return this.board.roundNumber;
  }

  public get result(): Result {
    return this.board;
  }

  public playGame(): void {
    if (!this.isCompleted) {
      this.board = {
        ...this.board,
        player1: randomEnum(Options),
        player2: randomEnum(Options),
        gameStatus: GameStatus.COMPLETED,
        roundNumber: this.board.roundNumber + 1,
      };
      this.board = this.calculateResultService.calculateResult(this.board);
    }
  }

  public playAgain(): void {
    this.resetPlayersChoice();
  }

  public restart(): void {
    this.board = this.initializeResult();
  }

  private initializeResult(): Result {
    return {
      player1: null,
      player2: null,
      result: 'Press Start Battle',
      player1Score: 0,
      player2Score: 0,
      gameStatus: GameStatus.INITIAL_STATE,
      roundNumber: 1,
    };
  }

  private resetPlayersChoice(): void {
    this.board = {
      ...this.board,
      player1: null,
      player2: null,
      result: 'Press Start Battle',
      gameStatus: GameStatus.INITIAL_STATE,
    };
  }
}

import { Injectable } from '@angular/core';

import { Options, Result } from 'src/app/models/game';
import { CalculateResultInterface } from './calculate-result.interface';

@Injectable({
  providedIn: 'root',
})
export class RockPaperScissorStrategy implements CalculateResultInterface {
  calculateResult(result: Result): Result {
    if (result.player1 === Options.ROCK && result.player2 === Options.SCISSOR) {
      result.result = 'Player 1 wins';
      result.player1Score++;
      return result;
    } else if (
      result.player1 === Options.ROCK &&
      result.player2 === Options.PAPER
    ) {
      result.result = 'Player 2 wins';
      result.player2Score++;
      return result;
    } else if (
      result.player1 === Options.SCISSOR &&
      result.player2 === Options.PAPER
    ) {
      result.result = 'Player 1 wins';
      result.player1Score++;
      return result;
    } else if (
      result.player1 === Options.SCISSOR &&
      result.player2 === Options.ROCK
    ) {
      result.result = 'Player 2 wins';
      result.player2Score++;
      return result;
    } else if (
      result.player1 === Options.PAPER &&
      result.player2 === Options.ROCK
    ) {
      result.result = 'Player 1 wins';
      result.player1Score++;
      return result;
    } else if (
      result.player1 === Options.PAPER &&
      result.player2 === Options.SCISSOR
    ) {
      result.result = 'Player 2 wins';
      result.player2Score++;
      return result;
    } else {
      result.result = "It's a Draw";
      return result;
    }
  }
}

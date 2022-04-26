import { Inject, Injectable } from '@angular/core';
import { Result } from 'src/app/models/game';
import {
  CalculateResultInterface,
  CalculateResultInterfaceToken,
} from './calculate-result.interface';

@Injectable({
  providedIn: 'root',
})
export class CalculateResultService {
  constructor(
    @Inject(CalculateResultInterfaceToken)
    private strategy: CalculateResultInterface
  ) {}

  public setStrategy(strategy: CalculateResultInterface): void {
    this.strategy = strategy;
  }

  public calculateResult(result: Result): Result {
    return this.strategy.calculateResult(result);
  }
}

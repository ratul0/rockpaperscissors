import { InjectionToken } from '@angular/core';
import { Result } from 'src/app/models/game';

export interface CalculateResultInterface {
  calculateResult(result: Result): Result;
}

export let CalculateResultInterfaceToken =
  new InjectionToken<CalculateResultInterface>('CALCULATE_RESULT_INTERFACE');

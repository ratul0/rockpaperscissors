import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { PlayingCardComponent } from 'src/app/components/playing-card/playing-card.component';
import { MaterialModule } from 'src/app/material.module';
import { GameStatus, Options } from 'src/app/models/game';
import { CalculateResultService } from 'src/app/services/result/calculate-result.service';

import { PlayerVsComputerComponent } from './player-vs-computer.component';

describe('PlayerVsComputerComponent', () => {
  let component: PlayerVsComputerComponent;
  let fixture: ComponentFixture<PlayerVsComputerComponent>;

  let calculateResultService: CalculateResultService;

  beforeEach(async () => {
    calculateResultService = jasmine.createSpyObj('calculateResultService', [
      'calculateResult',
    ]);

    await TestBed.configureTestingModule({
      declarations: [
        PlayerVsComputerComponent,
        PlayingCardComponent,
        HeaderComponent,
      ],
      providers: [
        { provide: CalculateResultService, useValue: calculateResultService },
      ],
      imports: [MaterialModule, RouterTestingModule.withRoutes([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerVsComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be in initial state on page load', () => {
    expect(component.isInitialState).toBeTruthy();
  });

  it('should be in round one on page load', () => {
    expect(component.roundNumber).toBe(1);
  });

  it('should call calculate result if the game is in initial state', () => {
    component.playGame(Options.ROCK);
    expect(calculateResultService.calculateResult).toHaveBeenCalled();
  });

  it('should not call calculate result if the game is in completed state', () => {
    component.board.gameStatus = GameStatus.COMPLETED;
    component.playGame(Options.ROCK);
    expect(calculateResultService.calculateResult).not.toHaveBeenCalled();
  });

  it('should reset round number if restart is called', () => {
    component.board.roundNumber = 5;
    component.restart();
    expect(component.board.roundNumber).toBe(1);
  });

  it('should reset player choice if play again is called', () => {
    component.board.player1 = Options.ROCK;
    component.board.player2 = Options.ROCK;
    component.playAgain();
    expect(component.board.player1).toBeNull();
    expect(component.board.player2).toBeNull();
  });
});

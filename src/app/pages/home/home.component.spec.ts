import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import {
  COMPUTER_VS_COMPUTER,
  PLAYER_VS_COMPUTER,
} from 'src/app/constants/routes';
import { MaterialModule } from 'src/app/material.module';
import { InstructionService } from 'src/app/services/instruction.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let mockRouter: any;
  let instructionService: InstructionService;

  beforeEach(async () => {
    instructionService = jasmine.createSpyObj('instructionService', [
      'openInstructionDialog',
    ]);
    mockRouter = {
      navigateByUrl: jasmine.createSpy('navigateByUrl'),
    };

    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        { provide: InstructionService, useValue: instructionService },
        { provide: Router, useValue: mockRouter },
      ],
      imports: [MaterialModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use instructionService service if openInstructionDialog is called', () => {
    component.openInstructionDialog();
    expect(instructionService.openInstructionDialog).toHaveBeenCalled();
  });

  it('should call navigateByUrl if goToPlayerVsComputerPage is called', () => {
    component.goToPlayerVsComputerPage();
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith(PLAYER_VS_COMPUTER);
  });

  it('should call navigateByUrl if goToComputerVsComputerPage is called', () => {
    component.goToComputerVsComputerPage();
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith(COMPUTER_VS_COMPUTER);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { InstructionService } from 'src/app/services/instruction.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  let mockRouter = {
    navigateByUrl: jasmine.createSpy('navigateByUrl'),
  };
  let instructionService: InstructionService;

  beforeEach(async () => {
    instructionService = jasmine.createSpyObj('instructionService', [
      'openInstructionDialog',
    ]);
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        { provide: InstructionService, useValue: instructionService },
        { provide: Router, useValue: mockRouter },
      ],
      imports: [MaterialModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
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

  it('should call navigateByUrl if goToHomePage is called', () => {
    component.goToHomePage();
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/home');
  });
});

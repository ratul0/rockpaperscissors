import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/material.module';

import { InstructionComponent } from './instruction.component';

describe('InstructionComponent', () => {
  let component: InstructionComponent;
  let fixture: ComponentFixture<InstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstructionComponent],
      imports: [MaterialModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

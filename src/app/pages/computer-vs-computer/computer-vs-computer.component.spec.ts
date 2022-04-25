import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerVsComputerComponent } from './computer-vs-computer.component';

describe('ComputerVsComputerComponent', () => {
  let component: ComputerVsComputerComponent;
  let fixture: ComponentFixture<ComputerVsComputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerVsComputerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerVsComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

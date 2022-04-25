import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerVsComputerComponent } from './player-vs-computer.component';

describe('PlayerVsComputerComponent', () => {
  let component: PlayerVsComputerComponent;
  let fixture: ComponentFixture<PlayerVsComputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerVsComputerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerVsComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

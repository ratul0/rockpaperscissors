import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingCardComponent } from './playing-card.component';

fdescribe('PlayingCardComponent', () => {
  let component: PlayingCardComponent;
  let fixture: ComponentFixture<PlayingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayingCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

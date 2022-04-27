import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HOME } from 'src/app/constants/routes';
import { MaterialModule } from 'src/app/material.module';

import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  let mockRouter: any;

  beforeEach(async () => {
    mockRouter = {
      navigateByUrl: jasmine.createSpy('navigateByUrl'),
    };

    await TestBed.configureTestingModule({
      declarations: [NotFoundComponent],
      providers: [{ provide: Router, useValue: mockRouter }],
      imports: [MaterialModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call navigateByUrl if goToHomePage is called', () => {
    component.goToHomePage();
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith(HOME);
  });
});

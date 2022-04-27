import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HOME } from 'src/app/constants/routes';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  constructor(private readonly router: Router) {}

  public goToHomePage(): void {
    this.router.navigateByUrl(HOME);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  COMPUTER_VS_COMPUTER,
  PLAYER_VS_COMPUTER,
} from 'src/app/constants/routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private readonly router: Router) {}

  public goToPlayerVsComputerPage(): void {
    this.router.navigateByUrl(PLAYER_VS_COMPUTER);
  }

  public goToComputerVsComputerPage(): void {
    this.router.navigateByUrl(COMPUTER_VS_COMPUTER);
  }
}

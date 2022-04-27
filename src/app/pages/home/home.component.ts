import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  COMPUTER_VS_COMPUTER,
  PLAYER_VS_COMPUTER,
} from 'src/app/constants/routes';
import { InstructionService } from 'src/app/services/instruction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private readonly router: Router,
    private readonly instructionService: InstructionService
  ) {}

  public goToPlayerVsComputerPage(): void {
    this.router.navigateByUrl(PLAYER_VS_COMPUTER);
  }

  public goToComputerVsComputerPage(): void {
    this.router.navigateByUrl(COMPUTER_VS_COMPUTER);
  }

  public openInstructionDialog(): void {
    this.instructionService.openInstructionDialog();
  }
}

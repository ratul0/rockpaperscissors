import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HOME } from 'src/app/constants/routes';
import { InstructionService } from 'src/app/services/instruction.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input()
  public roundNumber = 1;

  constructor(
    private readonly instructionService: InstructionService,
    private readonly router: Router
  ) {}

  public openInstructionDialog(): void {
    this.instructionService.openInstructionDialog();
  }

  public goToHomePage(): void {
    this.router.navigateByUrl(HOME);
  }
}

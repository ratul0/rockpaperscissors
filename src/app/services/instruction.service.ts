import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InstructionComponent } from '../components/instruction/instruction.component';

@Injectable({
  providedIn: 'root',
})
export class InstructionService {
  constructor(private readonly dialog: MatDialog) {}

  public openInstructionDialog(): void {
    this.dialog.open(InstructionComponent);
  }
}

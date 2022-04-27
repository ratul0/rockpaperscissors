import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { InstructionService } from './instruction.service';

describe('InstructionService', () => {
  let service: InstructionService;
  let dialog: any;

  beforeEach(() => {
    dialog = jasmine.createSpyObj('MatDialog', ['open']);
    TestBed.configureTestingModule({
      providers: [
        InstructionService,
        {
          provide: MatDialog,
          useValue: dialog,
        },
      ],
    });
    service = TestBed.inject(InstructionService);
  });

  it('should call MatDialog open when openInstructionDialog is called', () => {
    service.openInstructionDialog();
    expect(dialog.open).toHaveBeenCalled();
  });
});

import { Component, Input } from '@angular/core';
import { Options } from 'src/app/models/game';

@Component({
  selector: 'app-playing-card',
  templateUrl: './playing-card.component.html',
  styleUrls: ['./playing-card.component.scss'],
})
export class PlayingCardComponent {
  @Input()
  public type: Options = Options.PAPER;

  @Input()
  public isActive: boolean = false;

  constructor() {}

  public get isPaper(): boolean {
    return this.type === Options.PAPER;
  }

  public get isRock(): boolean {
    return this.type === Options.ROCK;
  }

  public get isScissor(): boolean {
    return this.type === Options.SCISSOR;
  }
}

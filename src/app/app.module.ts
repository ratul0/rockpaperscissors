import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { PlayerVsComputerComponent } from './pages/player-vs-computer/player-vs-computer.component';
import { ComputerVsComputerComponent } from './pages/computer-vs-computer/computer-vs-computer.component';
import { InstructionComponent } from './components/instruction/instruction.component';
import { HeaderComponent } from './components/header/header.component';
import { CalculateResultInterfaceToken } from './services/result/calculate-result.interface';
import { RockPaperScissorsStrategy } from './services/result/rock-paper-scissor.strategy';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    PlayerVsComputerComponent,
    ComputerVsComputerComponent,
    InstructionComponent,
    HeaderComponent,
    PlayingCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    {
      provide: CalculateResultInterfaceToken,
      useClass: RockPaperScissorsStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

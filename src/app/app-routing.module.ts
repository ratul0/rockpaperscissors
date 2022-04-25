import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PlayerVsComputerComponent } from './pages/player-vs-computer/player-vs-computer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'player-vs-computer', component: PlayerVsComputerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MatchPageComponent } from './components/match-page/match-page.component';
import { MatchDetailComponent } from './components/match-detail/match-detail.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "matches", component: MatchPageComponent},
  {path: "register", component: AddPlayerComponent},
  {path: "add", component: AddMatchComponent},
  {path: "match-detail/:id", component: MatchDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

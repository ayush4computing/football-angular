import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { MatchPageComponent } from './components/match-page/match-page.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { MatchDetailComponent } from './components/match-detail/match-detail.component';
import { TeamsPipePipe } from './pipes/teams-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddPlayerComponent,
    MatchPageComponent,
    AddMatchComponent,
    MatchDetailComponent,
    TeamsPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

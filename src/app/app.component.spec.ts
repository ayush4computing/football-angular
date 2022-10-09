import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { Match } from 'src/app/model/match';
import { Player } from 'src/app/model/player';
import { MatchDetailComponent } from './components/match-detail/match-detail.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let players: Player[];
  let match: Match;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        HomePageComponent,
        MatchDetailComponent,
        AddMatchComponent,
        AddPlayerComponent
      ],
    }).compileComponents();
    players = [
      {
        firstName: 'John',
        lastname: 'Doe',
        jerseyNumber: '99',
        id: 1,
        position: 'Forward'
      },

      {
        firstName: 'Adam',
        lastname: 'Blake',
        jerseyNumber: '99',
        id: 1,
        position: 'Forward'
      }
    ];
    match = {
      id: 1,
      datetime: '20-05-2022 12:00:00',
      place: 'Anfield, Liverpool, England',
      players: players,
      result: 'Real Madrid Won by 2 Goals.',
      score: '3-5',
      teams: 'Liverpool-Real Madrid'
    };
  });

  it('Display players on home page', () => {
    const homePageFixture = TestBed.createComponent(HomePageComponent);
    const homePageInstance = homePageFixture.componentInstance;
    homePageInstance.players = players;
    homePageFixture.detectChanges();
    expect(homePageFixture.debugElement.queryAll(By.css('.card-body')).length).toEqual(2);
  });

  it('Display matches on match details page', () => {
    const matchDetailsFixture = TestBed.createComponent(MatchDetailComponent);
    const matchDetailsInstance = matchDetailsFixture.componentInstance;
    matchDetailsInstance.match = match;
    matchDetailsFixture.detectChanges();
    expect(matchDetailsFixture.debugElement.queryAll(By.css('.player-name')).length).toEqual(2);
  });

  it('Add Match button disabled untill form valid', () => {
    const addMatchFixture = TestBed.createComponent(AddMatchComponent);
    const addMatchInstance = addMatchFixture.componentInstance
    addMatchFixture.detectChanges();
    expect(addMatchFixture.debugElement.query(By.css('.btn')).nativeElement.disabled).toBeTruthy();
    addMatchInstance.addMatchForm.controls['teamNames'].setValue('Liverpool,Real Madrid');
    addMatchInstance.addMatchForm.controls['place'].setValue('Anfield, Liverpool, England');
    addMatchInstance.addMatchForm.controls['datetime'].setValue('2022-01-20');
    addMatchInstance.addMatchForm.controls['score'].setValue('1,2');
    addMatchInstance.addMatchForm.controls['result'].setValue('won');
    addMatchInstance.addMatchForm.controls['players'].setValue(['Lionel Messi']);
    addMatchFixture.detectChanges();
    expect(addMatchFixture.debugElement.query(By.css('.btn')).nativeElement.disabled).toBeFalsy();
  });

  it('Add Player button disabled untill form valid', () => {
    const addPlayerFixture = TestBed.createComponent(AddPlayerComponent);
    const addPlayerInstance = addPlayerFixture.componentInstance
    addPlayerFixture.detectChanges();
    expect(addPlayerFixture.debugElement.query(By.css('.btn')).nativeElement.disabled).toBeTruthy();
    addPlayerInstance.registerForm.controls['firstName'].setValue('Jane');
    addPlayerInstance.registerForm.controls['lastName'].setValue('Heard');
    addPlayerInstance.registerForm.controls['position'].setValue('Middle');
    addPlayerInstance.registerForm.controls['jNumber'].setValue('1');
    addPlayerFixture.detectChanges();
    expect(addPlayerFixture.debugElement.query(By.css('.btn')).nativeElement.disabled).toBeFalsy();
  });

  

});

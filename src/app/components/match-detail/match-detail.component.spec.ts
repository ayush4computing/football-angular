import { Match } from 'src/app/model/match';
import { Player } from 'src/app/model/player';
import { MatchDetailComponent } from './match-detail.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from "@angular/router/testing";

describe('MatchDetailComponent', () => {
  let players: Player[];
  let match: Match;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        BrowserModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [
        MatchDetailComponent,
      ],
    }).compileComponents();
    players = [
      {
        firstName: 'John',
        lastname: 'Doe',
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

  it('Display player names on match details page', () => {
    const matchDetailsFixture = TestBed.createComponent(MatchDetailComponent);
    const matchDetailsInstance = matchDetailsFixture.componentInstance;
    matchDetailsInstance.match = match;
    matchDetailsFixture.detectChanges();
    expect(matchDetailsFixture.debugElement.queryAll(By.css('.player-name')).length).toEqual(1);
  });

  it('Display match date on match details page', () => {
    const matchDetailsFixture = TestBed.createComponent(MatchDetailComponent);
    const matchDetailsInstance = matchDetailsFixture.componentInstance;
    matchDetailsInstance.match = match;
    matchDetailsFixture.detectChanges();
    const matchDate = matchDetailsFixture.nativeElement.querySelector('.match-date');
    expect((matchDate.textContent as string).trim()).toBe('20-05-2022 12:00:00');
  });

  it('Display match place on match details page', () => {
    const matchDetailsFixture = TestBed.createComponent(MatchDetailComponent);
    const matchDetailsInstance = matchDetailsFixture.componentInstance;
    matchDetailsInstance.match = match;
    matchDetailsFixture.detectChanges();
    const matchDate = matchDetailsFixture.nativeElement.querySelector('.match-place');
    expect((matchDate.textContent as string).trim()).toBe('Anfield, Liverpool, England');
  });

  it('Display players jersey number on match details page', () => {
    const matchDetailsFixture = TestBed.createComponent(MatchDetailComponent);
    const matchDetailsInstance = matchDetailsFixture.componentInstance;
    matchDetailsInstance.match = match;
    matchDetailsFixture.detectChanges();
    const matchDate = matchDetailsFixture.nativeElement.querySelector('.player-jersey-num');
    expect((matchDate.textContent as string).trim()).toBe('99');
  });


});

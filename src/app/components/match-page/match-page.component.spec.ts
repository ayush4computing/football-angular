import { Match } from 'src/app/model/match';
import { Player } from 'src/app/model/player';
import { MatchPageComponent } from './match-page.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { inject, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from '@angular/router';

describe('MatchPageComponent', () => {
  let players: Player[];
  let match: Match;
  let router: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        BrowserModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [
        MatchPageComponent,
      ],
    }).compileComponents();
    router = TestBed.get(Router);
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


  it('viewMatchDetails() should navigate to respective match details page', () => {
    const matchPageFixture = TestBed.createComponent(MatchPageComponent);
    const matchPageInstance = matchPageFixture.componentInstance;
    const navigateSpy = spyOn(router, 'navigate');
    matchPageInstance.viewMatchDetails(match.id);
    expect(navigateSpy).toHaveBeenCalledWith(['/match-detail/'+match.id]);
  });
});

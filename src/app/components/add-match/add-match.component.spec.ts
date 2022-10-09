import { Match } from 'src/app/model/match';
import { Player } from 'src/app/model/player';
import { AddMatchComponent } from './add-match.component'
import { BrowserModule, By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { inject, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from '@angular/router';

describe('AddMatchComponent', () => {
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
        AddMatchComponent,
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

  it('addMatch() should submit the form', () => {
    const matchPageFixture = TestBed.createComponent(AddMatchComponent);
    const addMatch = matchPageFixture.componentInstance;
    addMatch.addMatch();
    matchPageFixture.detectChanges();
    expect(addMatch.submitted).toEqual(true);
  });
});

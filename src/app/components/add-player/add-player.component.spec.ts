import { Match } from 'src/app/model/match';
import { Player } from 'src/app/model/player';
import { AddPlayerComponent } from './add-player.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { inject, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from '@angular/router';

describe('AddPlayerComponent', () => {
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
        AddPlayerComponent,
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



  it('onSubmit() should submit the form', () => {
    const addPlayerFixture = TestBed.createComponent(AddPlayerComponent);
    const addPlayerInstance = addPlayerFixture.componentInstance;
    addPlayerInstance.onSubmit();
    addPlayerFixture.detectChanges();
    expect(addPlayerInstance.submitted).toEqual(true);
  });

  it('onSubmit() should navigate to home page on success', () => {
    const addPlayerFixture = TestBed.createComponent(AddPlayerComponent);
    const addPlayerInstance = addPlayerFixture.componentInstance;
    const navigateSpy = spyOn(router, 'navigate');
    // addPlayerInstance.registerForm.valid = true
    addPlayerInstance.onSubmit();
    expect(navigateSpy).toHaveBeenCalledWith(['']);
  });
});

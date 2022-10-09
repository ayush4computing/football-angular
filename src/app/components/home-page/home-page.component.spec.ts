import { Match } from 'src/app/model/match';
import { Player } from 'src/app/model/player';
import { HomePageComponent } from './home-page.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { inject, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from '@angular/router';

describe('HomePageComponent', () => {
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
        HomePageComponent,
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


  it('Display player first name on home page', () => {
    const homePageFixture = TestBed.createComponent(HomePageComponent);
    const homePageInstance = homePageFixture.componentInstance;
    homePageInstance.players = players;
    homePageFixture.detectChanges();
    const matchDate = homePageFixture.nativeElement.querySelector('.player-first-name');
    expect((matchDate.textContent as string).trim()).toBe('John');
  });

  it('Display player jersey number on home page', () => {
    const homePageFixture = TestBed.createComponent(HomePageComponent);
    const homePageInstance = homePageFixture.componentInstance;
    homePageInstance.players = players;
    homePageFixture.detectChanges();
    const matchDate = homePageFixture.nativeElement.querySelector('.player-jersey-number');
    expect((matchDate.textContent as string).trim()).toBe('99');
  });

  it('Display player position on home page', () => {
    const homePageFixture = TestBed.createComponent(HomePageComponent);
    const homePageInstance = homePageFixture.componentInstance;
    homePageInstance.players = players;
    homePageFixture.detectChanges();
    const matchDate = homePageFixture.nativeElement.querySelector('.player-position');
    expect((matchDate.textContent as string).trim()).toBe('Forward');
  });

  it('View details should navigate to details page', () => {
    const HomePageFixture = TestBed.createComponent(HomePageComponent);
    const HomePageInstance = HomePageFixture.componentInstance;
    const navigateSpy = spyOn(router, 'navigateByUrl');
    HomePageInstance.navigateToRegister();
    expect(navigateSpy).toHaveBeenCalledWith('/register');
  });
});

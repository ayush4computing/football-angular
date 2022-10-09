import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/model/player';
import { PlayerService } from 'src/app/service/player-service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  players: Player[] = [];
  constructor(@Inject(PlayerService) private playerService:PlayerService, private router: Router) {
    this.players = this.playerService.getAllPlayers();
   }

  ngOnInit(): void {
  }

  navigateToRegister(){
    this.router.navigateByUrl('/register');
  }
}

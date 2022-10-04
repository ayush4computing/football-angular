import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Match } from 'src/app/model/match';
import { MatchService } from 'src/app/service/match-service';

@Component({
  selector: 'app-match-page',
  templateUrl: './match-page.component.html',
  styleUrls: ['./match-page.component.css']
})
export class MatchPageComponent implements OnInit {

  matches: Match[] = []

  team:string[] = []
  score: string[] = []

  constructor(@Inject(MatchService) private matchService: MatchService, private router: Router) {
    this.matches = matchService.getAllMatches()
    
   }

  ngOnInit(): void {
  }

  viewMatchDetails(id: number){
    this.router.navigate([
      '/match-detail/'+id
    ]);
  }


}

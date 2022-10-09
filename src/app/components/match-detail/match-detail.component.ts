import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Match } from 'src/app/model/match';
import { MatchService } from 'src/app/service/match-service';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit {

  public match: Match = {
    id: 1,
    teams: "",
    place: "",
    datetime: "",
    score: "",
    result: "",
    players: []
  }
  public team: string[] = []
  public score: string[] = []

  constructor(@Inject(MatchService) private matchService: MatchService, private route: ActivatedRoute) {
    let id = this.route.snapshot.params['id'] // getting the value of "id" parameter from URL
    this.match = this.matchService.getMatchById(id);  // fetching the match object form the array of matches
  }

  ngOnInit(): void {
    this.team = this.match.teams.split(',');
    this.score = this.match.score.split('-');
  }

}
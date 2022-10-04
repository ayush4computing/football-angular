import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Player } from 'src/app/model/player';
import { MatchService } from 'src/app/service/match-service';
import { PlayerService } from 'src/app/service/player-service';


@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  
  results: string[] = ['Won', 'Lose', 'Draw']
  players!: Player[];
  addMatchForm!: FormGroup
  submitted: boolean = false;

  
  

  constructor(@Inject(PlayerService) private playerService: PlayerService,@Inject(MatchService) private matchService: MatchService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.players = this.playerService.getAllPlayers();

    this.addMatchForm = this.fb.group({
      teamNames: ['',[Validators.required]],
      place: ['',[Validators.required]],
      datetime: ['',[Validators.required]],
      score: ['',[Validators.required]],
      result: ['',[Validators.required]],
      players: ['',[Validators.required]]
    }); 

    

  }

  addMatch(){
    this.submitted = true
    if(this.addMatchForm.invalid){
      return
    }else{

      this.matchService.addMatch(this.addMatchForm.value);
      console.log(this.addMatchForm.value)
      
    }


  }
  
}

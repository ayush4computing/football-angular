import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Player } from 'src/app/model/player';
import { PlayerService } from 'src/app/service/player-service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  positions: string[] = ['Forward', 'Mid-Winger', 'Goal Keeper', 'Right-Winger']
  player!: Player
  submitted: boolean = false;
  registerForm! : FormGroup;

  constructor(@Inject(PlayerService) private playerService: PlayerService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['',[Validators.required, Validators.minLength(4)]],
      lastName: ['',[Validators.required, Validators.minLength(4)]],
      position: ['',[Validators.required]],
      jNumber: ['',[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
    }); 
  }

  onSubmit(){
    this.submitted = true
    if(this.registerForm.invalid){
      return
    }else{
      // console.log(this.registerForm.value.jNumber)
      this.playerService.addPlayer(this.registerForm.value);
      this.router.navigate([
        ''
      ]);
    }
  }

}

import { Injectable } from "@angular/core";
import { Player } from "../model/player";

@Injectable({
    providedIn: 'root'
})
export class PlayerService{
    
    player!: Player
    
    addPlayer(value: any) {
        
        this.player = new Player(this.players.length,value.firstName,value.lastName,value.position,value.jNumber);
        
        this.players.push(this.player)
        console.log(this.players)

    }
    



    getAllPlayers(): Player[] {
      return this.players
    }



    public players: Player[] = [
        {
            id: 0,
            firstName: "Lionel",
            lastname: "Messi",
            position: "Forward",
            jerseyNumber: "10"
        },
        {
            id: 1,
            firstName: "Cristiano",
            lastname: "Ronaldo",
            position: "Center Attacking",
            jerseyNumber: "7"
        },
        {
            id: 2,
            firstName: "Neymar",
            lastname: "Junior",
            position: "Forward",
            jerseyNumber: "10"
        },
        {
            id: 3,
            firstName: "Andres",
            lastname: "Iniesta",
            position: "Midfielder",
            jerseyNumber: "8"
        },
        {
            id: 4,
            firstName: "Zlatan",
            lastname: "Ibrahimovic",
            position: "Forward",
            jerseyNumber: "11"
        },
        {
            id: 5,
            firstName: "Iker",
            lastname: "Casillas",
            position: "Goalkeeper",
            jerseyNumber: "1"
        }
        
    ]
}
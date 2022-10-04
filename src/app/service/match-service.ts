import { Injectable } from "@angular/core";
import { Match } from "../model/match";

@Injectable({
    providedIn: 'root'
})
export class MatchService{
    
    match!:Match
    
    addMatch(value: any) {

        this.match = new Match(this.matches.length,value.teamNames,value.place,value.datetime,value.score,value.result,[])

        this.matches.push(this.match)
      
    }
    getMatchById(id: any): any {
      let match = this.matches.find((m) => m.id == id)
        return match
    }
    
    getAllMatches(): Match[] {
        return this.matches
      }
  
    
    
    public matches: Match[] = [
        {
            id: 0,
            teams: "Liverpool,Real Madrid",
            place: "Anfield, Liverpool, England",
            datetime: "2022-10-25",
            score: "3-5",
            result: "WIN",
            players: [
                
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
                    },
                    {
                        id: 6,
                        firstName: "Gerard",
                        lastname: "Pique",
                        position: "Defender",
                        jerseyNumber: "3"
                    },
                
            ]
        },
        {
            id: 1,
            teams: "FC Barcelona,Bayern Munich",
            place: "Old Trafford, Manchester, England",
            datetime: "2022-1-02",
            score: "1-0",
            result: "LOSE",
            players: [
                {
                    id: 0,
                    firstName: "Zlatan",
                    lastname: "Ibrahimovic",
                    position: "Forward",
                    jerseyNumber: "11"
                },
                {
                    id: 1,
                    firstName: "Iker",
                    lastname: "Casillas",
                    position: "Goalkeeper",
                    jerseyNumber: "1"
                },
                {
                    id: 2,
                    firstName: "Gerard",
                    lastname: "Pique",
                    position: "Defender",
                    jerseyNumber: "3"
                },
            ]
        },
        {
            id: 2,
            teams: "Manchester United,Real Madrid",
            place: "Camp Nou, Barcelona, Spain",
            datetime: "2020-03-15",
            score: "1-1",
            result: "WIN",
            players: [
                {
                    id: 0,
                    firstName: "Thomas",
                    lastname: "Muller",
                    position: "Forward",
                    jerseyNumber: "25"
                },
                {
                    id: 1,
                    firstName: "Xavi",
                    lastname: "",
                    position: "Midfielder",
                    jerseyNumber: "6"
                },
                {
                    id: 2,
                    firstName: "Sergio",
                    lastname: "Aguero",
                    position: "Forward",
                    jerseyNumber: "10"
                },
            ]
        }

    ]
}
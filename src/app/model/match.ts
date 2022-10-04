import { Player } from "./player"

export class Match {
    id: number = -1
    teams: string = ""
    place: string = ""
    datetime: String = ""
    score: string = ""
    result: string = ""
    players: Player[] =  []

    constructor(id: number,teams: string,place: string,datetime: String,score: string,result: string,players: Player[]){
        this.id = id;
    this.teams = teams;
    this.place = place;
    this.datetime = datetime;
    this.score = score;
    this.result = result;
    this.players = players
    }
}
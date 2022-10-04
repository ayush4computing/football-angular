export class Player {
    id: number = -1;
    firstName: string = "";
    lastname: string = "";
    position: string = "";
    jerseyNumber: string = "";

    constructor(id: number, firstName: string, lastName: string, position: string, jerseyNumber: string){
        this.id = id;
        this.firstName = firstName;
        this.lastname = lastName;
        this.position = position;
        this.jerseyNumber = jerseyNumber;
    }
}
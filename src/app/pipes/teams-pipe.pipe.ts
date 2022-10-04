import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teamsPipe'
})
export class TeamsPipePipe implements PipeTransform {

  team: String[] = []

  transform(value: String): String {
    this.team = value.split(',')
    
    return this.team[0]+" Vs "+this.team[1];
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByTeamId'
})
export class FilterByTeamIdPipe implements PipeTransform {
  transform(items: any[], teamId: number): any[] {
    if (!items || !teamId) {
      return items;
    }
    return items.filter(item => item.teamId === teamId);
  }
}

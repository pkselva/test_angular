import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, maxnum: number): any[] {

    if (!searchText || searchText.length == 0) return items;
    return items.filter(({value}) => {
      return value.toLowerCase().includes(searchText);
    });
  }
}

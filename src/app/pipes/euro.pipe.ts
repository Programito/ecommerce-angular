import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euro'
})
export class EuroPipe implements PipeTransform {

  transform(precio: number): any {
      let euro: string =  precio.toFixed(2).toString();
      euro = euro + ' €';
      return euro;
  }

}

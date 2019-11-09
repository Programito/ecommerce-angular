import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoria'
})
export class CategoriaPipe implements PipeTransform {

  transform(subcategorias: any): any {
    let salida = ' ';
    subcategorias.forEach((subcategoria: any) => salida += '<' + subcategoria + '> ' );
    return salida;
  }

}

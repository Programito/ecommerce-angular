import { NgModule } from '@angular/core';
import { CategoriaPipe } from './categoria.pipe';
import { EuroPipe } from './euro.pipe';

@NgModule({
  imports: [

  ],
  declarations: [
    CategoriaPipe,
    EuroPipe
  ],
  exports: [
    CategoriaPipe,
    EuroPipe
  ]
})
export class PipesModule { }

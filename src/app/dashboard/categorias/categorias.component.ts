import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria/categoria.service';
import { Categoria } from '../../models/categoria.model';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  constructor(public categoriaService: CategoriaService) { }

  categorias: Categoria[] = [];
  ngOnInit() {
    this.cargarAllCategories();
  }

  cargarAllCategories() {

    this.categoriaService.loadCategories()
      .subscribe((resp: any) => {
          console.log(resp);
          this.categorias = resp;
          this.categorias.sort((a: any, b: any) => a.categoria - b.categoria);
        });
  }

}


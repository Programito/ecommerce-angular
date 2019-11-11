import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  cargandoPromocion: boolean = true;
  productsPromocion: [Product];
  productsOferta: [Product];
  cargandoOfertas: boolean = true;
  promos = [];
  ofertas = [];

  constructor(public productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.loadPromociones()
      .subscribe((resp: any) => {
        this.productsPromocion = resp;
        this.cargandoPromocion = false;
        for (let i = 0; (i < 4) && (i < this.productsPromocion.length); i++) {
          this.promos.push(this.productsPromocion[i]);
        }
        console.log(this.promos);
      });

    this.productsService.loadOfertas()
      .subscribe((resp: any) => {
        this.productsOferta = resp;
        this.cargandoOfertas = false;
        for (let i = 0; (i < 4) && (i < this.productsOferta.length); i++) {
          this.ofertas.push(this.productsOferta[i]);
        }
    });
  }

}

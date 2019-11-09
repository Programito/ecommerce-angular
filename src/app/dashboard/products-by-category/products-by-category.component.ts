import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products/products.service';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.css']
})
export class ProductsByCategoryComponent implements OnInit {

  id: string;
  products: [Product];
  cargando: boolean=true;

  constructor(
              public activatedRoute: ActivatedRoute,
              public productsService: ProductsService,
              ) {
  activatedRoute.params
    .subscribe( params => {
          this.id = params['id'];
    });
  }

  ngOnInit() {
    this.productsService.loadProductByCategory(this.id)
      .subscribe((resp: any) => {
        this.products = resp;
        this.cargando = false;
        this.products.sort((a: any, b: any) => a.p - b.p);
      });
   }

}

import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products/products.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';


@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  id: string;
  product: Product;
  cargando: boolean=true;
  cantidad: number=0;


  constructor(public productService: ProductsService,
              public activatedRoute: ActivatedRoute,
              private router: Router) {
      activatedRoute.params
        .subscribe( params => {
          this.id = params['id'];
      });
    }

  ngOnInit() {
    this.productService.loadProduct(this.id)
      .subscribe((resp: any) => {
        this.product = resp;
        this.cargando = false;
        console.log(this.product);
      },
      err => {console.log('id de producto no existe: ', err);
              this.router.navigate(['/']);
            });

  }

  comprar() {
    console.log(this.cantidad);
    this.productService.addProduct(this.id, this.cantidad)
        .subscribe((resp: any) => {
            console.log(resp);
        });

  }
}



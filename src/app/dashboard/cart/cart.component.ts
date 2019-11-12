import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { Cart } from '../../models/cart.model';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart;
  id: string;
  cargando: boolean = true;

  constructor(public cartService: CartService,
              public activatedRoute: ActivatedRoute) {
    activatedRoute.params
        .subscribe( params => {
          this.id = params['id'];
      });
   }

  ngOnInit() {
    this.cargarCarrito();
  }

  cargarCarrito() {
    this.cartService.loadCart(this.id)
    .subscribe(
      (resp:any) => {
          if (resp.total == undefined) {
             this.cart = new Cart(null,0);
             this.cargando = false;
          } else {
            console.log(resp);
            this.cart = resp;
            this.cargando = false;
            console.log(this.cart.products[0]);
          }

    },
      err => {
        console.log(err);
      }
    );
  }

  borrarProducto(idProduct,cantidad,nombreProduct){
    if(cantidad != undefined && cantidad > 0){
    console.log(idProduct);
    console.log(cantidad);
    console.log(nombreProduct);

    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Deseas retirar a ' + nombreProduct,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, !Eliminalo!'
    }).then((borrar) => {
        if (borrar.value ) {
          this.cartService.removeProduct(this.id, idProduct, cantidad, nombreProduct)
            .subscribe((borrado) => {
              this.cargarCarrito();
          }, err => console.log(err)
        );
        }
    });
  }
}
}

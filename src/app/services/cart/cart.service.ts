import { Injectable } from '@angular/core';
import { URL_ECOMMERCE } from '../../config/config';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  token: string;

  constructor(public http: HttpClient) { 
    this.token = localStorage.getItem('token');
  }

  loadCart(id) {
    const url = URL_ECOMMERCE + '/cart/' + id + '?token=' + this.token;

    console.log('token ', this.token);

    return this.http.get(url);

  }

  removeProduct(id: string, idProduct: string, cantidad: number, nombreProduct: string) {
      const url = URL_ECOMMERCE + '/cart/' + id;

      console.log(this.token);

      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: {
          token: this.token,
          idProduct,
          cantidad
        },
      };

      return this.http
        .delete(url, options).pipe(
          map((resp: any) => {
            Swal.fire('Borrado', `Se ha retirado ${cantidad} del producto ${nombreProduct}}`, 'success');
          }
        ));
  }
}

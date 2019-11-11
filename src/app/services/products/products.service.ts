import { Injectable } from '@angular/core';
import { URL_ECOMMERCE } from '../../config/config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http: HttpClient) { }

  loadProductByCategory(id) {
    const url = URL_ECOMMERCE + '/products/buscar/categories/' + id;

    return this.http.get(url);
  }

  loadPromociones() {
    const url = URL_ECOMMERCE + '/product/buscar/promocion';

    return this.http.get(url);
  }

  loadOfertas() {
    const url = URL_ECOMMERCE + '/product/buscar/oferta';
    return this.http.get(url);
  }

}

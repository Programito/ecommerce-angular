import { Injectable } from '@angular/core';
import { URL_ECOMMERCE } from '../../config/config';
import {HttpClient} from '@angular/common/http';
import { Usuario } from '../../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  token: string;
  user: Usuario;

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

  loadProduct(id) {
    const url = URL_ECOMMERCE + '/product/' + id;
    return this.http.get(url);
  }

  addProduct(idProduct, cantidad) {
    this.token = localStorage.getItem('token');
    this.user = JSON.parse(localStorage.getItem('usuario'));
   
    console.log(this.token);
    const params = {"idProduct": idProduct, "cantidad": cantidad, "token": this.token};
    const url = URL_ECOMMERCE + '/cart/' + this.user[0]._id;
    return this.http.put(url, params);
  }
}

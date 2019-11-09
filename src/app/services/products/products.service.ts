import { Injectable } from '@angular/core';
import { URL_ECOMMERCE } from '../../config/config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http: HttpClient) { }

  loadProductByCategory(id) {
    const url = URL_ECOMMERCE + '/products/category/' + id;

    return this.http.get(url);
  }
}

import { Injectable } from '@angular/core';
import { URL_ECOMMERCE } from '../../config/config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(public http: HttpClient) { }

  loadCategories() {
    const url = URL_ECOMMERCE + '/categories';

    return this.http.get(url);
  }

}

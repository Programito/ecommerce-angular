import { Injectable } from '@angular/core';
import { URL_ECOMMERCE } from '../../config/config';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  menu: any = [];

  constructor(public http: HttpClient) {
    console.log('Servicio de Users listo');
  }

  loadAllUser() {
    let url= URL_ECOMMERCE + '/users?count=true';

    return this.http.get(url);
  }
}

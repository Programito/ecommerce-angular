import { Injectable } from '@angular/core';
import { URL_ECOMMERCE } from '../../config/config';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Usuario } from '../../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  token: string;
  user: Usuario;


  constructor(public http: HttpClient) {
    console.log('Servicio de Users listo');
    this.token = localStorage.getItem('token');
    this.user = JSON.parse(localStorage.getItem('usuario'));
  }

  loadAllUser() {
    const url= URL_ECOMMERCE + '/users?count=true';

    return this.http.get(url);
  }

  loadUserById(id) {
    const url = URL_ECOMMERCE + '/users/' + id;
    return this.http.get(url);
  }

  removeUser(id) {
    if ( id === this.user._id) {
        console.log('id iguales');
        Swal.fire('Error borrar usuario', 'No te puedes borrar a ti mismo', 'error');
        return;
    } else {
      const url = URL_ECOMMERCE + '/users/' + id;

      console.log(this.token);

      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: {
          token: this.token,
        },
      };

      return this.http
        .delete(url, options).pipe(
          map((resp: any) => {
            console.log(resp);
            Swal.fire('Usuario creado', resp, 'success');
          }
        ));
    }
  }

}
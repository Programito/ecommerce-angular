import { Injectable } from '@angular/core';
import { URL_ECOMMERCE } from '../../config/config';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Usuario } from '../../models/usuario.model';
import { throwError } from 'rxjs';

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

  loadUserById(id: string) {
    const url = URL_ECOMMERCE + '/users/' + id;
    return this.http.get(url);
  }

  removeUser(id: string) {
    if ( id === this.user[0]._id) {
        Swal.fire('Error borrar usuario', 'No te puedes borrar a ti mismo', 'error');
        return throwError('No te puedes borrar a ti mismo');
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
            Swal.fire('Borrado', resp.email + ' ha sido borrado', 'success');
          }
        ));
    }
  }

  updateUser(usuario) {
    const url = URL_ECOMMERCE + '/users/' + usuario._id;
    console.log(url);
    const value = {"nombre": "test5"};
    return this.http.put(url, value);
  }

}

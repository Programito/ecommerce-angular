import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import {HttpClient} from '@angular/common/http';
import { URL_ECOMMERCE } from '../../config/config';

import Swal from 'sweetalert2';

// import { Observable, throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(
    public http: HttpClient) {
      console.log('Servicio de usuario listo');
      this.cargarStorage();
   }

   estaLogueado() {
     return (this.token.length > 5 ? true : false);
   }

   cargarStorage() {
     if (localStorage.getItem('token')) {
        this.token = localStorage.getItem('token');
        console.log(localStorage.getItem('token'));
        console.log(localStorage.getItem('usuario'));
        if (localStorage.getItem('usuario') &&  localStorage.getItem('usuario') !== 'undefined') {
          this.usuario = JSON.parse(localStorage.getItem('usuario'));
        } else {
          console.log('Usuario es null');
          this.usuario = null;
        }
     } else {
       this.token = '';
       this.usuario = null;
     }
   }

   login( usuario: Usuario) {
      let url = URL_ECOMMERCE + '/login';
      return this.http.post(url, usuario).pipe(
        map((resp: any) => {
          console.log(resp);
          localStorage.setItem('id', resp.user._id);
          localStorage.setItem('token', resp.token);
          localStorage.setItem('usuario', JSON.stringify(resp.user));

          this.usuario = resp.usuario;
          this.token = resp.token;

          return true;
        })
      );
   }

   crearUsuario(usuario: Usuario) {
     let url= URL_ECOMMERCE + '/register';

     return this.http.post(url, usuario).pipe(
        map((resp: any) => {
            Swal.fire('Usuario creado', usuario.email, 'success');
            return resp.usuario;
        })
      );

   }
}

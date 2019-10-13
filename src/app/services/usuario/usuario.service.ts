import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import {HttpClient} from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

import Swal from 'sweetalert2';

import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    public http: HttpClient) {
    console.log('Servicio de usuario listo');
   }

   login( usuario: Usuario) {
      let url = URL_SERVICIOS + '/login';
      return this.http.post(url, usuario).pipe(
        map((resp: any) => {
          console.log(resp);
          console.log("usuario", resp.usuario._id);
          console.log("usuario", resp.Usuario._id);
          localStorage.setItem('id', resp.usuario._id);
          localStorage.setItem('token', resp.token);
          localStorage.setItem('usuario', JSON.stringify(resp.usuario));

          return true;
        })
      );
   }

   crearUsuario(usuario: Usuario) {
     let url= URL_SERVICIOS + '/usuario';

     return this.http.post(url, usuario).pipe(
        map((resp: any) => {
            Swal.fire('Usuario creado', usuario.email, 'success');
            return resp.usuario;
        })
      );

   }
}

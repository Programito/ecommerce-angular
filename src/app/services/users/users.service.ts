import { Injectable } from '@angular/core';
import { URL_ECOMMERCE } from '../../config/config';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Usuario } from '../../models/usuario.model';
import { throwError } from 'rxjs';
import {Observable, of, from } from 'rxjs';
import { UploadFilesService } from '../upload-files/upload-files.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  token: string;
  user: Usuario;


  constructor(public http: HttpClient,
              public uploadFilesServices: UploadFilesService) {
    console.log('Servicio de Users listo');
    this.token = localStorage.getItem('token');
    this.user = JSON.parse(localStorage.getItem('usuario'));
  }

  loadAllUser() {
    const url= URL_ECOMMERCE + '/users?count=true';

    console.log('token ', this.token);

    return this.http.get(`${url}&token=${this.token}`);

  
  }

  loadUserById(id: string) {
    const url = URL_ECOMMERCE + '/users/' + id;
    console.log("token:", this.token);
    return this.http.get(`${url}?token=${this.token}`);
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

  updateUser(usuario: Usuario) {
    const url = URL_ECOMMERCE + '/users/' + usuario._id;
    const value = {"nombre": usuario.nombre, "email": usuario.email, "token": this.token};
    console.log("modificar: ", value);
    return this.http.put(url, value);
  }

  updateRole(id,role) {
    const url = URL_ECOMMERCE + '/users/role/' + id;
    const value = {"role": role, "token": this.token}
    return this.http.put(url, value);
  }

  cambiarImagen( archivo: File, id: string) {
    this.uploadFilesServices.subirArchivo(archivo,  id)
    .then( (resp: any) => {
      console.log('respuesta:' , resp);
      this.user.img = resp.usuario.img;
      let usuario: [Usuario] = JSON.parse(localStorage.getItem('usuario'));
      usuario[0].img = this.user.img;
      localStorage.setItem('usuario', JSON.stringify(usuario));
      Swal.fire('Imagen actualizada', this.user.nombre, 'success');
    })
    .catch( resp => {
      console.log(resp);
    });
}

}

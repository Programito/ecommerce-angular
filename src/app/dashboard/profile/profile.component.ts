import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';
import {URL_ECOMMERCE} from '../../config/config';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: string;
  usuario: Usuario;
  cargando: boolean = true;

  imagenSubir: File;
  imagenTemp: string;

  constructor(
    public activatedRoute: ActivatedRoute,
    public userService: UsersService,
    public router: Router
  ) {
    activatedRoute.params
      .subscribe( params => {
          this.id = params['id'];
      });
  }

  ngOnInit() {
    this.userService.loadUserById(this.id)
      .subscribe(
        (resp: any) => {
          this.usuario = resp;
          this.cargando = false;
          this.usuario.img = URL_ECOMMERCE + '/upload/' + this.usuario._id;
      }, err => console.log(err)
      );
  }

  guardar(usuario: Usuario) {
    this.usuario.nombre = usuario.nombre;
    this.usuario.email = usuario.email;
    this.userService.updateUser(this.usuario)
    .subscribe((resp: any) => {
        console.log(resp);
        Swal.fire('Modificado', resp.email + ' ha sido modificado', 'success');
        this.router.navigate(['/login']);
    },
    err => {
      console.log(err);
      Swal.fire('Error', err.error.error, 'error');
      }
    );
  }

  
  seleccionImage (archivo: File) {
    if (!archivo) {
      this.imagenSubir = null;
      return;
    }

    // en el type del navegador contenga image ej: image/png
    if (archivo.type.indexOf('image')) {
      Swal.fire('Sólo imagenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    // mostrar imagen a partir del archivo
    let reader= new FileReader();
    let urlImagenTemp= reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imagenTemp = reader.result as string;
  }

  cambiarImagen() {
    this.userService.cambiarImagen(this.imagenSubir, this.usuario._id);
  }



}

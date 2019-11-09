import { Component, OnInit } from '@angular/core';
import { UsersService, StylesService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import Swal from 'sweetalert2';
import {URL_ECOMMERCE} from '../../config/config';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css',
              '../animated.css']
})
export class UsersComponent implements OnInit {


  usuarios: Usuario[] = [];
  cargando: boolean = true;
  desde: number = 0;
  totalRegistros: number = 0;



  constructor(
    private router: Router,
    public userService: UsersService,
    public httpclient: HttpClient) { }

  ngOnInit() {
    this.cargarAllUsers();
  }

  cargarAllUsers() {

    this.userService.loadAllUser()
      .subscribe((resp: any) => {
          this.cargando = false;
          this.usuarios = resp;
          console.log(resp);
          this.totalRegistros = resp[this.usuarios.length - 1].user_number;
          this.usuarios.pop();
          this.cargarImagen();
      });
  }

  updateUser(id){
    const ruta = 'profile/' + id;
    this.router.navigate([ruta]);
  }

  buscarUsuario(value) {

  }

  guardarUsuario(usuario: Usuario) {
    this.userService.updateRole(usuario._id, usuario.role)
      .subscribe((resp: any) => {
          Swal.fire('Rol Modificado', 'El rol ' + usuario.email + ': ' + resp.role, 'success');
          console.log(resp);
      }, err => {
        Swal.fire('Rol Modificado', 'Ha habido un error modificando el rol', 'error');
        console.log(err);
      });
  }

  cargarImagen(){
    for(let i=0;i<this.usuarios.length;i++){
      // if(this.usuarios[i].img != undefined){
        this.usuarios[i].img = URL_ECOMMERCE + '/upload/' + this.usuarios[i]._id;
        console.log( this.usuarios[i].img);
      // }
    }
  }


  borrarUsuario(usuario) {

    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Deseas borrar a ' + usuario.email,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, !Eliminalo!'
    }).then((borrar) => {
        console.log(usuario.email);
        if (borrar.value ) {
          this.userService.removeUser(usuario._id)
            .subscribe((borrado) => {
              this.cargarAllUsers();
          }, err => console.log(err)
        );
        }
    });
  }

}

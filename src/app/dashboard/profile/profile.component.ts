import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';
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

  constructor(
    public activatedRoute: ActivatedRoute,
    public userService: UsersService
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
        this.renovar();
    },
    err => {
      console.log(err);
      Swal.fire('Error', 'El email debe ser único', 'error');
      }
    );
  }

  renovar() {
    const user: Usuario = JSON.parse(localStorage.getItem('usuario'));
    console.log(user[0]._id);
    console.log(this.id);
    if (user[0]._id === this.id) {
      user[0].nombre = this.usuario.nombre;
      user[0].email = this.usuario.email;
      localStorage.setItem('usuario', JSON.stringify(user));
      localStorage.setItem('id', this.id);
    }
  }

}

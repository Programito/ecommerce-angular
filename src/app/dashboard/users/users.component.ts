import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';



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


  constructor(public userService: UsersService) { }

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
      });
  }

  updateUser(id){
    console.log(id);
  }

  buscarUsuario(value) {

  }

  guardarUsuario(usuario) {

  }

  borrarUsuario(usuario) {

  }



}

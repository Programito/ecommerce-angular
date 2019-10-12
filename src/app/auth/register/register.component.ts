import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  onSubmit(data: any) {
    // this.authService.crearUsuario(data.nombre, data.email, data.password);
    console.log('nombre', data.nombre);
    console.log('email', data.email);
    console.log('password', data.password);

    let usuario = new Usuario(data.nombre, data.email, data.password);

    this.usuarioService.crearUsuario(usuario)
        .subscribe(resp => {
          console.log(resp);
        });
  }

}

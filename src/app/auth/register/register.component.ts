import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public usuarioService: UsuarioService,
              public router: Router) { }

  ngOnInit() {
  }

  onSubmit(data: any) {
    // this.authService.crearUsuario(data.nombre, data.email, data.password);
    console.log('nombre', data.nombre);
    console.log('email', data.email);
    console.log('password', data.password);

    let usuario = new Usuario(data.nombre, data.email, data.password);

    this.usuarioService.crearUsuario(usuario)
        .subscribe(
          resp => this.router.navigate(['/login']),
          err => {
            console.log(err);
            Swal.fire('Error', err.error, 'error');
          }
          );

  }

}

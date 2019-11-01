import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public router: Router,
    public usuarioService: UsuarioService
  ) { }

  ngOnInit() {
  }

  onSubmit(data: any) {
    if (data.invalid) {
      return;
    }

    // console.log('email', data.email);
    // console.log('password', data.password);

    let usuario = new Usuario(null, data.email, data.password);

    this.usuarioService.login(usuario)
            .subscribe(
              resp => {
                  console.log(resp);
                  this.router.navigate(['/dashboard']);
            },
              err => Swal.fire('Error', err.error, 'error')
            );
  }


}

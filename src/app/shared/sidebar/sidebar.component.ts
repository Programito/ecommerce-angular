import { Component, OnInit } from '@angular/core';
import { StylesService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';
import {URL_ECOMMERCE} from '../../config/config';
import { UsuarioService } from '../../services/usuario/usuario.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  id: String;
  admin: Boolean = false;
  nombre: String;
  img: String;
  token: string;

  constructor(public sytleService: StylesService,
              public usuarioService: UsuarioService) {
    let user = JSON.parse(localStorage.getItem('usuario'));
    this.token = localStorage.getItem('token');
    this.id = user[0]._id;
    this.nombre = user[0].nombre;
    
    if (user[0].role === 'ADMIN_ROLE') {
      this.admin = true;
    }

   }

  ngOnInit() {
    this.img = URL_ECOMMERCE + '/upload/' + this.id + "?token=" + this.token;
  }

  logOut() {
    this.usuarioService.logOut();
  }


}

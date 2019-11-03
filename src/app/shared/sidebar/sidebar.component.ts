import { Component, OnInit } from '@angular/core';
import { StylesService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  id: String;
  admin: Boolean = false;
  nombre: String;

  constructor(public sytleService: StylesService) {
    let user = JSON.parse(localStorage.getItem('usuario'));

    this.id = user[0]._id;
    this.nombre = user[0].nombre;
    if (user[0].role === 'ADMIN_ROLE') {
      this.admin = true;
    }

   }

  ngOnInit() {
  }


}

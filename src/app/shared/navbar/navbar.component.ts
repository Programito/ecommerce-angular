import { Component, OnInit } from '@angular/core';
import { StylesService } from '../../services/service.index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public stylesService: StylesService
  ) { }

  ngOnInit() {
  }

  mostrar(){
    // console.log("saludo");
    this.stylesService.modMostrar();
  }

}

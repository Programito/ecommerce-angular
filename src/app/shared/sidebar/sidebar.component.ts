import { Component, OnInit } from '@angular/core';
import { StylesService } from '../../services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    public sytleService: StylesService
  ) { }

  ngOnInit() {
  }


}

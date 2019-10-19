import { Component, OnInit } from '@angular/core';
import { StylesService } from '../services/service.index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public stylesService: StylesService
  ) { }

  ngOnInit() {
  }

}

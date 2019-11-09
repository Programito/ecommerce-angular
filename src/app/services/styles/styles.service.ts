import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StylesService {

  mostrar: boolean = true;

  constructor() { }

  modMostrar() {
    this.mostrar = !this.mostrar;
  }

  getMostrar(): boolean {
    return this.mostrar;
  }

}

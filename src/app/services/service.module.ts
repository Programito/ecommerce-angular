import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  UsuarioService,
  LoginGuardGuard,
  StylesService,
  UsersService,
  UploadFilesService,
  CategoriaService,
  ProductsService,
  CartService
} from './service.index';

@NgModule({
    imports: [
      CommonModule,
      HttpClientModule
    ],
    providers: [
      UsuarioService,
      LoginGuardGuard,
      StylesService,
      UsersService,
      UploadFilesService,
      CategoriaService,
      ProductsService,
      CartService
    ],
    declarations: []
  })
  export class ServiceModule {}

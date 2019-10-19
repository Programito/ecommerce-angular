import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  UsuarioService,
  LoginGuardGuard,
  StylesService
} from './service.index';

@NgModule({
    imports: [
      CommonModule,
      HttpClientModule
    ],
    providers: [
      UsuarioService,
      LoginGuardGuard
    ],
    declarations: []
  })
  export class ServiceModule {}

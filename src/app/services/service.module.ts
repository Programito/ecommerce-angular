import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  UsuarioService
} from './service.index';

@NgModule({
    imports: [
      CommonModule,
      HttpClientModule
    ],
    providers: [
      UsuarioService,
    ],
    declarations: []
  })
  export class ServiceModule {}

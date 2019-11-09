import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos
import {AppRoutingModule} from './app-routing.module';

// Modulos personalizados
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.modules';

// // Servicios
import {ServiceModule} from './services/service.module';

import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceModule,
    AuthModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

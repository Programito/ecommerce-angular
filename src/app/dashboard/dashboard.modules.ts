import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { PromocionComponent } from './promocion/promocion.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriasComponent } from './categorias/categorias.component';




@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        DashboardRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        DashboardComponent,
        OfertasComponent,
        PromocionComponent,
        UsersComponent,
        ProfileComponent,
        CategoriasComponent
    ]
})

export class DashboardModule {}





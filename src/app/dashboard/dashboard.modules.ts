import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { PromocionComponent } from './promocion/promocion.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.modules';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent,
        OfertasComponent,
        PromocionComponent
    ]
})

export class DashboardModule {}





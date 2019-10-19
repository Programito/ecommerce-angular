import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { dashboardRoutes } from './dashboard/dashboard.routes';
import { LoginGuardGuard } from './services/guards/login-guard.guard';





const routes: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {
        path: '',
        component: DashboardComponent,
        children: dashboardRoutes,
        canActivate: [LoginGuardGuard]
     },
    {path: '**', redirectTo: ''}
];


@NgModule({

    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})


export class AppRoutingModule {}

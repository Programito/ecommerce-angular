import { NgModule } from '@angular/core';
// ngif ngfor
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './register/register.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

@NgModule({

    declarations: [
        RegisterComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ]
})

export class AuthModule {}

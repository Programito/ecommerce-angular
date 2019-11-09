import {Routes} from '@angular/router';
import { PromocionComponent } from './promocion/promocion.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoriasComponent } from './categorias/categorias.component';


export const dashboardRoutes: Routes = [
    {path: '', component: PromocionComponent},
    {path: 'ofertas', component: OfertasComponent},
    {path: 'users', component: UsersComponent},
    {path: 'categorias', component: CategoriasComponent},
    {path: 'profile/:id', component: ProfileComponent}
];

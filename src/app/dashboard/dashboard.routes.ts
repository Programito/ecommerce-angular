import {Routes} from '@angular/router';
import { PromocionComponent } from './promocion/promocion.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';


export const dashboardRoutes: Routes = [
    {path: '', component: PromocionComponent},
    {path: 'ofertas', component: OfertasComponent},
    {path: 'users', component: UsersComponent},
    {path: 'profile/:id', component: ProfileComponent}
];

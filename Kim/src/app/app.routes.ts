import { Routes } from '@angular/router';
import { FirstRouteComponent } from './first-route/first-route.component';
import { SecondRouteComponent } from './second-route/second-route.component';


export const routes: Routes = [
    {
        path: '',
        component: FirstRouteComponent
    },
    {
        path: 'second-route',
        component: SecondRouteComponent
    }
];

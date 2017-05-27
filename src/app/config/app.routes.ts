import {Route} from '@angular/router';
import {CreateServerComponent} from '../server/create-server.component';
import {HomeComponent} from '../home/home.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'server/create',
        component: CreateServerComponent
    }
];

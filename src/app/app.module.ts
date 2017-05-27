import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './config/app.routes';
import {CreateServerComponent} from './server/create-server.component';
import {HeaderComponent} from './common/header.component';
import {HomeComponent} from './home/home.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
    ],
    declarations: [
        AppComponent,
        CreateServerComponent,
        HeaderComponent,
        HomeComponent,
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }

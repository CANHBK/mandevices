import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {HeaderComponent} from './main/header/header.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {SidebarLeftComponent} from './main/sidebar-left/sidebar-left.component';
import {PagesComponent} from './main/pages/pages.component';
import {SidebarRightComponent} from './main/sidebar-right/sidebar-right.component';
import {VendorsModule} from '../../../vendors/src/lib/vendors.module';
import { LoginComponent } from './authentication/login/login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        HeaderComponent,
        AuthenticationComponent,
        SidebarLeftComponent,
        PagesComponent,
        SidebarRightComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        VendorsModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

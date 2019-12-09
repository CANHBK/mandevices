import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SidebarLeftComponent } from './main/sidebar-left/sidebar-left.component';
import { PagesComponent } from './main/pages/pages.component';
import { SidebarRightComponent } from './main/sidebar-right/sidebar-right.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    AuthenticationComponent,
    SidebarLeftComponent,
    PagesComponent,
    SidebarRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

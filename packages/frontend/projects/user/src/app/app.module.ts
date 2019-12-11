import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { LeftSidebarComponent } from './main/left-sidebar/left-sidebar.component';
import { PagesComponent } from './main/pages/pages.component';
import { VendorsModule } from '@apis/vendors.module';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { FormsModule } from '@angular/forms';
import { AppModule as UiModule } from '../../../ui/src/app/app.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    LeftSidebarComponent,
    PagesComponent,
    AuthenticationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    VendorsModule,
    AppRoutingModule,
    FormsModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

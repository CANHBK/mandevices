import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppModule as UiModule } from '../../../../projects/ui/src/app/app.module'
import { AppRoutingModule } from './app-routing.module';
import { ClickOutsideModule } from 'ng-click-outside';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { AuthenticationComponent } from './main/header/authentication/authentication.component';
import { LoginComponent } from './main/header/authentication/login/login.component';
import { RegisterComponent } from './main/header/authentication/register/register.component';
import { RecoverComponent } from './main/header/authentication/recover/recover.component';
import { FormsModule } from '@angular/forms';
import { PagesComponent } from './main/pages/pages.component';
import { HomePageComponent } from './main/pages/home-page/home-page.component';
import { SliderComponent } from './main/pages/home-page/slider/slider.component';
import { VendorsModule } from '../../../vendors/src/lib/vendors.module';
import { LoggedComponent } from './main/header/logged/logged.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    AuthenticationComponent,
    LoginComponent,
    RegisterComponent,
    RecoverComponent,
    PagesComponent,
    HomePageComponent,
    SliderComponent,
    LoggedComponent
  ],
  imports: [
    BrowserModule,
    VendorsModule,
    FormsModule,
    ClickOutsideModule,
    AppRoutingModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
